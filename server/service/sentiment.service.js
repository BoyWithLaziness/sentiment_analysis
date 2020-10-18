const config = require('../config/config');

const sentimentService = {


    //get all users from userInfos collection in DB
    getFromFacebook: () => {
        
        return { result: 'from facebook' };
    },
    getFromInstagram: () => {
        return { result: 'from instagram' };
    },
    getFromTwitter: () => {
        return { result: 'from twitter' };
    },
    getFromAll: () => {
        return { result: 'from all' };
    },


};
module.exports = sentimentService;