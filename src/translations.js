'use strict';
var aws = require('aws-sdk');
var s3;
var bucketName = 'alexa-skill-fact';
var key = 'translations.json';

module.exports = (function () {
  return {
    getResources: function () {

      if (!s3) {
        s3 = new aws.S3({ apiVersion: '2006-03-01' });
      }

      var params = {
        Bucket: bucketName,
        Key: key,
        ResponseContentType: 'application/json'
      };

      return s3.getObject(params).promise();
    }
  };
})();