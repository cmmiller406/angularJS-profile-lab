"use strict";

function ProfileService($location) {
    const self = this;
    self.user = {
        name: "Gus Gus",
        contact: "GusGus@gmail.com",
        bio: "I am a cat who likes wet food and will only drink water out of a faucet. "
    };
    self.getUserProfile = () => {
        return self.info;
    };
    self.setUserProfile = () => {
        self.info = user;
        $location.path("/edit-profile");
    };
}

angular
    .module("App")
    .service("ProfileService", ProfileService);