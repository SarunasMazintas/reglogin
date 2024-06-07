# Setup company news

## Setup company news

Company news functionality were updated according to clients needs, comment, views, logging, email functions were implemented, more information below:

### 1. Form

Company news form should be updated with these attributes:

<figure><img src="../../.gitbook/assets/image (143).png" alt=""><figcaption><p>These attributes are mandatory, if Company requires functionality which would allow to restrict who will be able to view newly posted company news.</p></figcaption></figure>

### 2. Views log

New object type with id - fRVg8vhdsD8BQy0rLBlP was created for company news views logging, contact Jevgenij Goretov, if any questions from where it should be cloend. If this functionality is included in a company, then it tracks every click on company news.

### 3. Preview company news

In company news class open Toolbar tab:\


<figure><img src="../../.gitbook/assets/image (220).png" alt=""><figcaption></figcaption></figure>

Create a new button, select Type as function and add Action 'previewCompanyNews':

<figure><img src="../../.gitbook/assets/image (265).png" alt=""><figcaption></figcaption></figure>

### 4. Company news archive navigation item

In case client needs company news archive, where all published company news are placed, you should create a new navigation item with routeParams: {"newsArchive":"true"}:

<figure><img src="../../.gitbook/assets/image (225).png" alt=""><figcaption></figcaption></figure>

How company news looks once opened through this navigation item:

<figure><img src="../../.gitbook/assets/image (187).png" alt=""><figcaption></figcaption></figure>

### 5. Expressions

#### 5.1. Expression to set AllWhoSee variable

This variable is responsible for permissions, all persons who are included in the multi-select will have access to view the document.

<figure><img src="../../.gitbook/assets/image (243).png" alt=""><figcaption></figcaption></figure>

Expression code:

```javascript
const allPersons = $data{allPersons};
const createdByPerson = $data{createdByPerson}.map(person => ({classId: 'person_class', id: person.id, name: person.name, objectTypeId: 'person'}));

if (allPersons.length) {
  return allPersons.map(person => ({classId: 'person_class', id: person.id, name: person.name, objectTypeId: 'person'}));
}
const depPersonsEmails  = ($data{departmentPersons}).map(person => ({classId: 'person_class', id: person.id, name: person.name, objectTypeId: 'person'}));
const groupPersonsEmails = ($data{groupPersons}).map(person => ({classId: 'person_class', id: person.id, name: person.name, objectTypeId: 'person'}));
const selectedPersonsEmails = ($data{selectedPersons}).map(person => ({classId: 'person_class', id: person.id, name: person.name, objectTypeId: 'person'}));
const persons = [...depPersonsEmails, ...groupPersonsEmails, ...selectedPersonsEmails, createdByPerson[0]].filter(
        (value, index, self) => index === self.findIndex((t) => t.id === value.id)
 );

return persons ;
```

#### Documents View:

All persons code:&#x20;

```javascript
return ${visibleForEveryone};
```

Created by code:&#x20;

```javascript
const createdBy = ${id_createdBy};
if($lookup{uid} && $lookup{uid}.id === createdBy.id){
 return true;
}
return false;
```

Selected persons code:

```javascript
const createdBy = ${id_createdBy};
if($lookup{uid} && $lookup{uid}.id === createdBy.id){
 return true;
}
return false;
```

Department persons code:

```javascript
const departments = ${visibleForDepartments};
for (const department of departments) {
   if (!! $lookup{departmentId} && $lookup{departmentId}.id === department.id) {
      return true;
    }
}
return false;
```

Group persons code:

```javascript
const groups = ${visibleForGroups};
for (const group of groups) {
   if ($lookup{groups}.length && $lookup{groups}.findIndex(x => x.id === group.id) !== -1) {
      return true;
    }
}
return false;
```

#### 5.2 Expression for sending an email to recipients

<figure><img src="../../.gitbook/assets/image (291).png" alt=""><figcaption></figcaption></figure>

Expression code:

```javascript
const allPersons = $data{allPersons};
let emails = '';
const createdByPerson = $data{createdByPerson}[0].email;
if (allPersons.length) {
  emails = allPersons.filter(person => person.email && person.email.includes('@')).map(person => person.email.trim()).join(', ');
} else {
   const depPersonsEmails  = ($data{departmentPersons}).filter(person => person.email && person.email.includes('@')).map(person => person.email.trim());
   const groupPersonsEmails = ($data{groupPersons}).filter(person => person.email && person.email.includes('@')).map(person => person.email.trim());
   const selectedPersonsEmails = ($data{selectedPersons}).filter(person => person.email && person.email.includes('@')).map(person => person.email.trim());
   emails = [...new Set([...depPersonsEmails, ...groupPersonsEmails, ...selectedPersonsEmails])].join(', ');
}
return {
  to: createdByPerson,
  from: 'hello@mail.vecticum.com', 
  bcc: emails,
  subject: '${name}',
  body: 'Hello, \r\n' + ' We have some great news! \n\r'
}
```

#### Documents View

Documents view expressions are identical to AllWhoSee



