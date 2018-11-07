"use strict";

const profile = {
    templateUrl: `app/profile/profile.html`,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.info = ProfileService.getUserProfile();
    }]
};


angular
    .module("App")
    .component("profile", profile);