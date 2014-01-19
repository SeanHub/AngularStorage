/*jslint devel: true */
(function () {
	"use strict";

	var app = angular.module("app", []);

	app.directive("history", function () {
		return {
			controller: "history",
			templateUrl: "history.html"
		};
	});

	app.controller("history", function ($scope, storage) {
		$scope.queries = storage.getQueries();

		$scope.add = function (data) {
			var query = {
				date: Date.now(),
				text: $scope.entry
			};
			$scope.queries.push(query);
			storage.storeEntry(query);
		};

		$scope.remove = function() {
			storage.removeEntry(this.query);
			$scope.queries = storage.getQueries();
		};

		$scope.selected = function () {
			console.log(this.query.date);
		};
	});

	app.factory("storage", function () {
		var getQueries = function () {
			var queries = [];
			for (var query in localStorage) {
				if (query) {
					var parsedQuery = localStorage.getItem(query);
					if (parsedQuery && parsedQuery !== "undefined") {
						queries.push(JSON.parse(parsedQuery));
					};
				}
			}
			return queries;
		};

		var removeEntry = function (entry) {
			for (var query in localStorage) {
				if (JSON.parse(localStorage.getItem(query)).date === entry.date) {
					delete localStorage[query];
				}
			}
		};

		var storeEntry = function (entry) {
			localStorage.setItem(localStorage.length, JSON.stringify(entry));
		};

		return {
			getQueries: getQueries,
			removeEntry: removeEntry,
			storeEntry: storeEntry
		}
	});
}());