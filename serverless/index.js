const app = require('./src/stack/serverless/app');
const processor = require('./src/stack/serverless/processor');

module.exports.handler = app;
module.exports.processor = processor;
