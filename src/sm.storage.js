angular.module('sm.storage', [])

.factory('storage', [
    function () {
        var getEntry = function (key) {
            return (key ? JSON.parse(localStorage.getItem(key)) : null);
        };

        var removeEntry = function (key) {
            delete localStorage[key];
        };

        var storeEntry = function (key, value) {
            try {
                if (!key || !value) {
                    throw new Error('You must provide a key and a value');
                };
                if(localStorage.getItem(key) !== null) {
                    throw new Error('This key already exists, please remove this key first');
                };
                localStorage.setItem(key, JSON.stringify(value));
            }
            catch (err) {
                throw err;
            };
        };

        return {
            getEntry: getEntry,
            removeEntry: removeEntry,
            storeEntry: storeEntry
        };
    }
]);