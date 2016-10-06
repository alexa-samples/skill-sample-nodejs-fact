// Copyright 2015, Amazon Web Services.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// the role ARN to assume for any AWS SDK related calls
// the role must have a trusted policy with
// "lambda.amazonaws.com" and "arn:aws:iam::<YOUR ACCOUNT ID>:user/<YOUR USER>"

var roleArn = 'arn:aws:iam::<enter here>/lambda_dynamo';
var region = 'us-east-1';
/* DO NOT MAKE CHANGE BELOW THIS */
var aws = require('aws-sdk');

function context() {
   var context = require('./context.json');
   context.done = function(error, result) {
       console.log('context.done');
       console.log(error);
       console.log(result);
       process.exit();
   }
   context.succeed = function(result) {
       console.log('context.succeed');
       console.log(result);
       process.exit();
   }
   context.fail = function(error) {
       console.log('context.fail');
       console.log(error);
       process.exit();
   }
   return context;
}
aws.config.region = region;
var sts = new aws.STS();
sts.assumeRole({
    RoleArn: roleArn,
    RoleSessionName: 'emulambda'
}, function(err, data) {
    if (err) { // an error occurred
        console.log('Cannot assume role');
        console.log(err, err.stack);
    } else { // successful response
        
        aws.config.update({
            accessKeyId: data.Credentials.AccessKeyId,
            secretAccessKey: data.Credentials.SecretAccessKey,
            sessionToken: data.Credentials.SessionToken
        });
       
        var Module = require('module');
        var originalRequire = Module.prototype.require;

        Module.prototype.require = function(){
          if (arguments[0] === 'aws-sdk'){
            return aws;
          } else {
            return originalRequire.apply(this, arguments);
          }
        };

        var lambda = require('../src/index.js');
        var event = require('./input.json');
        // var event = require('./endSession.json');
        lambda.handler(event, context());
    }
});
