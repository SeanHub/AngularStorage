angular.module("app", [])

  /* acting as a view */
	.directive("history", function () {
		return {
			controller: "history",
			templateUrl: "history.html"
		};
	})

	.controller("history", function ($scope, storage) {
		$scope.storage = storage;
		$scope.queries = $scope.storage.getQueries();
    
		$scope.add = function () {
			var query = {
				date: Date.now(),
				text: $scope.entry
			};
			
			$scope.queries.push(query);
			$scope.storage.storeEntry(query);
		};

		$scope.remove = function() {
			$scope.storage.removeEntry(this.query);
			$scope.queries.splice($scope.queries.indexOf(this.query), 1);
		};

		$scope.selected = function () {
			console.log(new Date(this.query.date));
		};
	})

  .factory("storage", function () {
    var queries = [];
    
    return {
		  getQueries: function () {
			  for (var query in localStorage) {
				  if (query) {
					  var parsedQuery = localStorage.getItem(query);
					  if (parsedQuery && typeof parsedQuery !== "undefined") {
						  queries.push(JSON.parse(parsedQuery));
					  };
				  }
			  }
			  return queries;
		  },

		  removeEntry: function (entry) {
			  for (var query in localStorage) {
				  if (JSON.parse(localStorage.getItem(query)).date === entry.date) {
					  delete localStorage[query];
				  }
			  }
		  },

		  storeEntry: function (entry) {
			  localStorage.setItem(localStorage.length, JSON.stringify(entry));
		  },
		  
		  hasEntries: function () {
		    if (queries.length != 0) 
		      return true;
		    else 
		      return false;
		  }
		}
	});
