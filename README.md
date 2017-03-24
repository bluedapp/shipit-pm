# shipit-pm
pm2 tasks for Shipit

support deploy & rollback

## Usage

```
var pm = require('shipit-pm');
var deploy = require('shipit-deploy');
var cnpm = require('shipit-cnpm');
module.exports = function(shipit) {
  deploy(shipit);
  cnpm(shipit);
  pm(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/deploy/node-example',
      deployTo: '/home/work/node-example',
      repositoryUrl: 'https://github.com/demohi/node-example.git',
      ignores: ['.git'],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true,
      cnpm: {
        flags: '--production'
      },
      pm: {
        production: {
          path: '/home/work/node-example/current/pm2/production.json',
          options: '--env production'
        }
        development: '/home/work/node-example/current/pm2/development.json'
      }
    },
    development: {
      servers: ['work@10.6.12.167']
    }
  });
}
```
