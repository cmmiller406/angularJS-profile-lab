"use strict";

const editProfile = {
    templateUrl: `app/edit-profile/editprofile.html`,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.passData = (user) => {
            ProfileService.setUserProfile(user);
          };
    }]
};


angular
    .module("App")
    .component("editProfile", editProfile);