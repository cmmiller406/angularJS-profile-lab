"use strict";

function ProfileService($location) {
    const self = this;
    self.userInfo = {
        name: "Gus Gus",
        contact: "GusGus@gmail.com",
        bio: "I am a cat who likes wet food and will only drink water out of a faucet. "
    };
    self.getUserInfo = () => {
        return self.userInfo;
    };
    self.setUserInfo = (updatedUserInfo) => {
        self.userInfo = updatedUserInfo;
        $location.path("/profile");
    };
    self.loadEdit = () => {
        $location.path("/edit-profile");
    };
}

angular
    .module("App")
    .service("ProfileService", ProfileService);