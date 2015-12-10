angular.module('sindh', ['lumx'])

.controller('MainCtrl', function($scope, $compile, $http, LxNotificationService) {

  $scope.maritial = [
      { name: 'Single'},
      { name: 'Married'},
      { name: 'Widow'},
      { name: 'Widower'}
    ];

  $scope.blood = [
    {name: 'O +ve'},
    {name: 'O –ve'},
    {name: 'A +ve'},
    {name: 'A –ve'},
    {name: 'B +ve'},
    {name: 'B –ve'},
    {name: 'AB +ve'},
    {name: 'AB –ve'}
  ];


  $scope.count = 0;
  $scope.show=false;

  $scope.maritialCheck = function (maritialstatus) {
    if (maritialstatus.name == 'Married') {
      var spouse = angular.element(document.createElement('addspouse'));
      var render = $compile(spouse)($scope);
      angular.element("#render").append(spouse);
    }

    if (maritialstatus.name == 'Single') {
      angular.element("#spousetoggle").remove(spouse);
    }
  };

  $scope.addDependants = function() {
      if ($scope.count < 1) {
        var dependant = angular.element(document.createElement('adddeps'));
        var render2 = $compile(dependant)($scope);
        angular.element("#render2").append(dependant);
        $scope.count++;
      }
  };


  $scope.copyResidence = function(residence) {
      // console.log(residence);
      $scope.person.office = angular.copy(residence);
      // console.log($scope.person.office);
  };

  $scope.person = {};
  // $scope.person.bloodgroup = {name:" "};

  $scope.submitData = function() {

      if (angular.isUndefined($scope.person.bloodgroup) || $scope.person.bloodgroup == null) {
        $scope.person.bloodgroup = {name:"NA"}
      }
      if (angular.isUndefined($scope.person.maritialstatus) || $scope.person.maritialstatus == null) {
        $scope.person.maritialstatus = {name:"Single"}
      }
      if (angular.isUndefined($scope.person.spousebloodgroup) || $scope.person.spousebloodgroup == null) {
        $scope.person.spousebloodgroup = {name:"NA"}
      }
      if (angular.isUndefined($scope.person.dependant1) || $scope.person.dependant1 == null) {
        $scope.person.dependant1 = {name:"NA"}
      }
      if (angular.isUndefined($scope.person.dependant1.blood) || $scope.person.dependant1.blood == null) {
        $scope.person.dependant1.blood = {name:"NA"}
      }
      if (angular.isUndefined($scope.person.dependant2) || $scope.person.dependant2 == null) {
        $scope.person.dependant2 = {name:"NA"}
      }
      if (angular.isUndefined($scope.person.dependant2.blood) || $scope.person.dependant2.blood == null) {
        $scope.person.dependant2.blood = {name:"NA"}
      }
      if (angular.isUndefined($scope.person.residence) || $scope.person.residence == null) {
        $scope.person.residence = {
                                  address1:"NA",
                                  address2:"NA",
                                  address3:"NA",
                                  state:"NA",
                                  city:"NA",
                                  pincode:"NA",
                                  phone:"NA",
                                  email:"NA"
                                };
      }
      if (angular.isUndefined($scope.person.office) || $scope.person.office == null) {
        $scope.person.office = {
                                  address1:"NA",
                                  address2:"NA",
                                  address3:"NA",
                                  state:"NA",
                                  city:"NA",
                                  pincode:"NA",
                                  phone:"NA",
                                  email:"NA"
                                };
      }



      $http({
          method: 'POST',
          url: '//api.cloudstitch.io/linuxsavvy/magic-form-3/datasources/sheet',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          data: 'First Name='+ encodeURIComponent($scope.person.firstname)+
                '&Last Name='+ encodeURIComponent($scope.person.lastname)+
                '&Date Of Birth='+ encodeURIComponent($scope.person.dob)+
                '&Blood Group='+encodeURIComponent($scope.person.bloodgroup.name)+
                '&Mobile Number='+ encodeURIComponent($scope.person.mobilenumber)+
                '&Maritial Status='+ encodeURIComponent($scope.person.maritialstatus.name)+
                '&Spouse First Name='+ encodeURIComponent($scope.person.spousefname)+
                '&Spouse Last Name='+ encodeURIComponent($scope.person.spouselname)+
                '&Spouse Date Of Birth='+ encodeURIComponent($scope.person.spousedob)+
                '&Wedding Date='+ encodeURIComponent($scope.person.weddingdate)+
                '&Spouse Mobile='+ encodeURIComponent($scope.person.spousemobile)+
                '&Spouse Blood Group='+ encodeURIComponent($scope.person.spousebloodgroup.name)+
                '&Dependant One Name='+ encodeURIComponent($scope.person.dependant1.name)+
                '&Dependant One Relation='+ encodeURIComponent($scope.person.dependant1.relation)+
                '&Dependant One Blood Group='+ encodeURIComponent($scope.person.dependant1.blood.name)+
                '&Dependant One DOB='+ encodeURIComponent($scope.person.dependant1.dob)+
                '&Dependant Two Name='+ encodeURIComponent($scope.person.dependant2.name)+
                '&Dependant Two Relation='+ encodeURIComponent($scope.person.dependant2.relation)+
                '&Dependant Two Blood Group='+ encodeURIComponent($scope.person.dependant2.blood.name)+
                '&Dependant Two DOB='+ encodeURIComponent($scope.person.dependant2.dob)+
                '&Residence Address='+ encodeURIComponent($scope.person.residence.address1)+
                 ' '+encodeURIComponent($scope.person.residence.address2)+
                 ' '+encodeURIComponent($scope.person.residence.address3)+
                 ' '+encodeURIComponent($scope.person.residence.state)+
                 ' '+encodeURIComponent($scope.person.residence.city)+
                 ' '+encodeURIComponent($scope.person.residence.pincode)+
                '&Phone No='+ encodeURIComponent($scope.person.residence.phone)+
                '&Residence Email='+ encodeURIComponent($scope.person.residence.email)+
                '&Office Address='+ encodeURIComponent($scope.person.office.address1)+
                 ' '+encodeURIComponent($scope.person.office.address2)+
                 ' '+encodeURIComponent($scope.person.office.address3)+
                 ' '+encodeURIComponent($scope.person.office.state)+
                 ' '+encodeURIComponent($scope.person.office.city)+
                 ' '+encodeURIComponent($scope.person.office.pincode)+
                '&Office Phone No='+ encodeURIComponent($scope.person.office.phone)+
                '&Office Email='+ encodeURIComponent($scope.person.office.email)
      }).success(function(response) {
        LxNotificationService.success('Saved!');
        $scope.person = {};
        $scope.show();
      });
  };




})

.directive('addspouse', function () {
    return {
      templateUrl: '../spouse.html',
      restrict: 'E'
    };
  })

.directive('adddeps', function () {
    return {
      templateUrl: '../dependant.html',
      restrict: 'E'
    };
  });
