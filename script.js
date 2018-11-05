var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){

  $scope.websites = [
    {
      url: "https://x.piratar.is",
      name: "Kosningakerfi",
      person: "Helgi Hrafn Gunnarsson"
    },
    {
      url: "https://pad.piratar.is/",
      name: "Etherpad Pírata",
      person: "?"
    },
    {
      url: "http://kvika.piratar.is/",
      name: "Kvika - Wiki vefur, inniheldur að mestu vinnuskjöl",
      person: "?"
    },
    {
      url: "https://member.piratar.is",
      name: "Félagatal Pírata",
      person: "Helgi Hrafn Gunnarsson"
    },
    {
      url: "https://grafana.piratar.is",
      name: "Yfirlit yfir kerfisnotkun? (Grafana)",
      person: "Viktor Smári"
    },
    {
      url: "https://log.piratar.is",
      name: "Lög Pírata",
      person: "(Viktor Smári)"
    },
    {
      url: "https://postur.piratar.is/",
      name: "Póstkerfi Pírata",
      person: "Björn Þór Jóhannesso"
    },
    {
      url: "http://gogn.piratar.is",
      name: "Mæting þingmanna á nefndarfundi",
      person: "?"
    },
    {
      url: "https://spjall.piratar.is",
      name: "Málefnaspjall (discource)",
      person: "?"
    },
    {
      url: "https://github.com/piratar/stefna",
      name: "Stefna Pírata",
      person: "?"
    },
    {
      url: "https://github.com/piratar/kennsla",
      name: "Kennsluefni Pírata",
      person: "?"
    },
    {
      url: "http://www.piratar.is/althingisrynirinn/",
      name: "Alþingisrýnir (2013)",
      person: "Bjarni Rúnar Einarsson"
    },
    {
      url: "http://blog.piratar.is/",
      name: "Blogsíður Pírata",
      person: "?"
    }
  ];
})
