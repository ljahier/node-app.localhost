# node-app.localhost

Allow me to run multiple web app to test network tools.

## Usage:

First params need to choose type of demo
    single or multiple
If multiple is selected, you need to set number of instance qui vont etre lancé
Set port begin and last port
Set name of app

example:

``` bash
npm run build

node lib/app.js --type=multiple --number=4 --port-begin=3000 --port-end=3003 --name="music"
```