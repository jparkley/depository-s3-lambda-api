const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.handler = async (event) => {
  // const { bucketName, objKey } = event;
  const bucketName = "";
  const objKey = "";

  const params = {
    Bucket: bucketName,
    key: objKey,
  };

  try {
    const s3Object = await s3.getObject(params).promise();
    console.log(s3Object.Body.toString());
    return s3Object.Body.toString();
  } catch (err) {
    console.log(err);
    throw err;
  }
};
