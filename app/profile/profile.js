"use strict";

const profile = {
    templateUrl: `app/profile/profile.html`,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.userInfo = ProfileService.getUserInfo();
        vm.loadEdit = () => {
            ProfileService.loadEdit();
        }
    }]
};

angular
    .module("App")
    .component("profile", profile);