var app = angular.module('thSample',['ngRoute']).
config(function($routeProvider, $locationProvider){
  $routeProvider.when('/edit-tours',{
    templateUrl:"edit-tours.html",
    controller:"AdminToursController",
    publicAccess: true,
    resolve: {
      currentUser: function(){
        return {name: 'Admin'};
      }
    }
  })
  .when('/tour/:slug',{
    templateUrl:"tour.html",
    controller:"TourController",
    publicAccess: true
  })
  .when('/edit-countries',{
    templateUrl:"edit-countries.html",
    controller:"AdminCountryController",
    publicAccess: true
  })
  .when('/',{
    templateUrl:"tours.html",
    controller:"ToursController",
    publicAccess: true
  })
  .otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
}).run(function($rootScope, $route, $location){
  $rootScope.$on("$locationChangeStart", function(event, next, current){
    console.log(event);
    console.log(next);
    console.log(current);

    var nextPath = $location.path();
    var nextRoute = $route.routes[nextPath] || $route.routes['/tour/:slug'];
    if (!nextRoute.publicAccess){
      alert('Необходима регистрация.')
      $location.path('/');
    }
  });
});


allTours = [
    {
      title: "Yet another suburban train",
      edit_mode:true,
      country: "Russia",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      slug: 1,
      price: 140000
    },
    {
      title: "Adventure time",
      edit_mode:true,
      country: "USA",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      slug: 2,
      price: 100000
    }
];

allCountries = [
  {
    title: "Russia",
    edit_mode:true
  },
  {
    title: "Poland",
    edit_mode:true
  }
];

