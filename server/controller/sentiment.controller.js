const config = require('../config/config');
const sentimentService = require('../service/sentiment.service');



const sentiment = {
    //check server working or not, get response
    test: (req, res) => {
        res.status(200).json({ status: 'success', message: 'Success' });
    },

    getFromFacebook: (req, res) => {
        const result = sentimentService.getFromFacebook();

        result ? res.status(200).json({ status: 'success', message: 'Success', payload: result }) :
            res.status(422).json({ status: 'failure', message: 'Something went wrong', payload: result });

    },
    getFromInstagram: (req, res) => {
        const result = sentimentService.getFromInstagram();

        result ? res.status(200).json({ status: 'success', message: 'Success', payload: result }) :
            res.status(422).json({ status: 'failure', message: 'Something went wrong', payload: result });

    },
    getFromTwitter: (req, res) => {
        const result = sentimentService.getFromTwitter();

        result ? res.status(200).json({ status: 'success', message: 'Success', payload: result }) :
            res.status(422).json({ status: 'failure', message: 'Something went wrong', payload: result });
    },
    getFromAll: (req, res) => {
        const result = sentimentService.getFromAll();

        result ? res.status(200).json({ status: 'success', message: 'Success', payload: result }) :
            res.status(422).json({ status: 'failure', message: 'Something went wrong', payload: result });
    },


};
module.exports = sentiment;