---
description: >-
  On this page there is introduced the example of deployment of possibility of
  automatic addition of multiple lines from the appointed template.
---

# Adding Lines From Template

In the below example there are described configurational steps which lead to preparation of functionality, which in business scenario is: adding multiple recruitment tasks to recruitment form, from appointed recruitment task template.

&#x20;

1. Creating the form for task template children (template task lines). The form should contain all the attributes which should be used for creating new task line from the task template line. There is one to one mapping while creating tasks from template lines so that is why the same attribute keys should be used in task template lines as well in destination task form.

<figure><img src="../../.gitbook/assets/image (295).png" alt=""><figcaption></figcaption></figure>

Also view for the template task lines children is prepared:

&#x20;

<figure><img src="../../.gitbook/assets/image (290).png" alt=""><figcaption></figcaption></figure>

2. &#x20; First the object type and the class and form are created for the task template header. On the form initially only Name attribute is added:

<figure><img src="../../.gitbook/assets/image (138).png" alt=""><figcaption></figcaption></figure>

Object type for the task template header:

<figure><img src="../../.gitbook/assets/image (275).png" alt=""><figcaption></figcaption></figure>

And the class:

<figure><img src="../../.gitbook/assets/image (140).png" alt=""><figcaption></figcaption></figure>

3. Creating the Object type and class for task template lines. Has to be appointed parent object type :

<figure><img src="../../.gitbook/assets/image (147).png" alt=""><figcaption></figcaption></figure>

As the parent key has to be appointed children attribute which will be added on the template header form.

<figure><img src="../../.gitbook/assets/image (294).png" alt=""><figcaption></figcaption></figure>

4. Add the children attribute on template header form which appoints to the the task template lines:

&#x20;

<figure><img src="../../.gitbook/assets/image (154).png" alt=""><figcaption></figcaption></figure>

On this stage of configuration it is possible to define task template with ingredients tasks lines as children:

<figure><img src="../../.gitbook/assets/image (328).png" alt=""><figcaption></figcaption></figure>

5. It is assumed that there is already exists the 'Recruitment' form. On it, as relation view, there is defined view for recruitment tasks:

<figure><img src="../../.gitbook/assets/image (322).png" alt=""><figcaption></figcaption></figure>

Definition of the relation view attribute for recruitment tasks:

<figure><img src="../../.gitbook/assets/image (320).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (195).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (211).png" alt=""><figcaption></figcaption></figure>

On the form assigned to 'Recruitment Task' class, there are existing the attributes with the same keys as in task template line form.&#x20;

6. Very important part of the setup is for the 'Recruitment Task' object type. In it's Advanced tab, there is definition of 'Templates params'. So it it important to comprehend that this definition is for the object type of destination object which is created on the basis of the template.

<figure><img src="../../.gitbook/assets/image (227).png" alt=""><figcaption></figcaption></figure>

&#x20;

```javascript
{ 
  "templateSplitLinesKey": "tempTaskLines", 
  "copyTemplateLineKeys": "typeRecTask,description,responsiblePersonId,status,createdFromTemp",
  "filterIncludeEmptyValues": true,
  "defaultTemplateKey": "defaultTemplateId",
  "copyHeaderKeys": "__self=>relatedCandidate",
  "orderKey": "order"
}
```

Comments:

* tempTaskLines - is  key of children attribute placed on the task template header form. We appoint in here from which attribute in template form system should take the lines,
* ```
  typeRecTask,description,responsiblePersonId,status,createdFromTemp - are the keys of the attributes which are existing in both: in task template line and in destination recruitment task line,
  ```
* \_\_self=>relatedCandidate - defines that for every created task line in recruitment form, while creating the new line, system should propagate self id of the recruitment and in this manner establish relation between created task line and the recruitment header. relatedCandidate is attribute of select type of control  from recruitment task to recruitment,
* &#x20; order - by the value of this key in task template line, new tasks has to be added. The attribute with this key is existing in both recruitment task template line and recruitment task. &#x20;

In the functional flow, when user from Recrutiment form chooses from template, then after picking the template, confirm with Next button:

<figure><img src="../../.gitbook/assets/image (235).png" alt=""><figcaption></figcaption></figure>

As the result the new tasks lines are created  in recruitment form chosen template:

&#x20;&#x20;

<figure><img src="../../.gitbook/assets/image (129).png" alt=""><figcaption></figcaption></figure>

They are added as the next items to existing positions, incrementing by 10. It is possible to add (create) the tasks a few times from the same or different task templates to the same recruitment form.&#x20;

In the case, there is only one tasks template added, after pressing 'From template' system skips selection of the template stage and creates the tasks from the only existing template.

It is worthy to emphasize 'adding in between' feature on the nested recrutiment tasks list:

<figure><img src="../../.gitbook/assets/image (135).png" alt=""><figcaption></figcaption></figure>

In such case when the plus (marked in red) button is pressed then new task with order (No) = 45 is added.&#x20;

&#x20;For the full explanation of the 'Template functionality parameters' please refer to:&#x20;

[template-functionality-parameters.md](../template-functionality-parameters.md "mention")&#x20;
