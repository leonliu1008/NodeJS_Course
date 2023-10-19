const AWS = require('aws-sdk');
const fs = require('fs');

// AWS憑證
AWS.config.update({
    accessKeyId: '你的Access Key ID',
    secretAccessKey: '你的Secret Access Key',
    region: '你的S3儲存桶所在的AWS區域'
  });