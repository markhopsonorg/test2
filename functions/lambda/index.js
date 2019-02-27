const Logger = require('@flipp/node-logger');
const logger = new Logger.Logger("github-repo-creator");

exports.handle = async (event, ctx, cb) => {
  logger.info(`Event: ${JSON.stringify(event)}`);
  logger.info(`Context: ${JSON.stringify(ctx)}`);
  
  try {
    // set the process.env[] variables based on the Param store values for this Lambda Function
    await SSMUtils.setParamStoreEnvironmentVariables(`/${context.functionName}/production`);
  } catch (err) {
    console.log(`Error Setting Environment Variables: ${JSON.stringify(err)}`);
    cb(err);
    return;
  }

  cb(null, eventObj);
};

/*
// SAMPLE INVOCATION
const sampleEvent = {
};

const sampleContext = {
  functionName: '',
};

exports.handle(sampleEvent, sampleContext, (err) => {
  if (err) {
    console.error(`Error: ${JSON.stringify(err)}`);
  } else {
    console.log('done');
  }
});
*/