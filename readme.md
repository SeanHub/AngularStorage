#Angular Storage

Angular storage service. Stores stringified data in the browsers localStorage.  

##Usage

- Add sm.popup.css to your application and include sm.popup as a module dependency.
```bash
angular.module('app', ['sm.storage']);
``` 

- Within your controller, include storage as a dependency. You can then use the following to store a key.
```bash
storage.storeEntry(key, value);
``` 

- You can then use the following to retreive a key.
```bash
storage.getEntry(key);
``` 

- You can then use the following to remove a key.
```bash
storage.removeEntry(key);
``` 

##To Do

- Add promise functionality to methods.
- Add to Bower package manager.
- Add test coverage.