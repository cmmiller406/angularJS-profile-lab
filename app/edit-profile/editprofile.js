"use strict";

const editProfile = {
    templateUrl: `app/edit-profile/editprofile.html`,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.userInfo = angular.copy(ProfileService.getUserInfo());
        vm.saveProfile = (updatedUserInfo) => {
            ProfileService.setUserInfo(updatedUserInfo);
          };
    }]
};

angular
    .module("App")
    .component("editProfile", editProfile);