#Angular Storage

Angular storage service. Stores stringified data in the browsers localStorage.  

##Installation

Install using bower by adding to bower.json or installing manually.
```bash
bower install sm-angular-storage
``` 

##Usage

Add sm.popup.css to your application and include sm.popup as a module dependency.
```javascript
angular.module('app', ['sm.storage']);
``` 

Within your controller, include storage as a dependency. You can then use the following to store a key.
```javascript
storage.storeEntry(key, value);
``` 

You can use the following to retreive a key.
```javascript
storage.getEntry(key);
``` 

You can use the following to remove a key.
```javascript
storage.removeEntry(key);
``` 

##To Do

- Add test coverage.