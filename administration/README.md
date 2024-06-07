# Administration

## System Security

This article outlines Vecticum platform security.

The Vecticum components and applications are all based on the Google Cloud platform, Firebase for records management and Firestore for files.

1. **Data -** all records and files are automatically encrypted before they are written. There is no need for additional setup or user intervention. All data is encrypted under the 256-bit Advanced Encryption Standard. Each encryption key is itself encrypted with regularly rotated sets of master keys.
2. **Data transit -** all data transmissions between Vecticum and the user are encrypted using https protocol, logically isolate user data and are encrypted under a valid SSL key.
3. **Users Authentication -** is performed using the Google Cloud authentication engine Firebase Authentication SDK. The same technology is when integrating Microsoft Azure Active Directory SSO (Single Sign On). This technology also uses 2 factor authentication methods.
4. **User Authorization -** is performed using Firebase permissions management services on the Document (record) level. Vecticum does not create or use any own or third party created authorisation solutions.
5. **Security Roles -** Vecticum utilises role-based access control methods allowing the separation system administrator (e.g. company power user) from unauthorised data. It is a baseline technology that abides by GDPR compliance requirements.&#x20;

Read more about Vecticum platform security:

* Firebase privacy and security: [https://firebase.google.com/support/privacy/](https://firebase.google.com/support/privacy/)
* User Authorisation: [https://firebase.google.com/docs/storage/security/](https://firebase.google.com/docs/storage/security/)
* Database Encryption: [https://firebase.google.com/support/privacy/#data\_encryption](https://firebase.google.com/support/privacy/#data\_encryption)
* Files Encryption: [https://cloud.google.com/firestore/docs/server-side-encryption](https://cloud.google.com/firestore/docs/server-side-encryption)



&#x20;

