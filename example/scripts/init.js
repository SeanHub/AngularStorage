angular.module('app', ['sm.storage'])

.controller('init', ['$scope', 'storage',
        function ($scope, storage) {
            $scope.name = storage.getEntry('name');
            
            $scope.save = function (value) {
                storage.storeEntry('name', value);
            };
            
            $scope.remove = function () {
                storage.removeEntry('name');
            };
        }
]);