const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');

credFile = path.format({root: '/ignored', dir: `${process.env['HOME']}`, base: '.terraformrc' });

try {
    const credentialsToken = core.getInput('tf-api-token');
    const credentialsHostname = core.getInput('tf-api-hostname');

    const c = `credentials "${credentialsHostname}" {
        token = "${credentialsToken}"
      }`;

    fs.writeFile(credFile, c, function(err, result) {
        if(err) console.log('error', err);
    })
    
} catch(error) {
    core.setFailed(error.message);
}
