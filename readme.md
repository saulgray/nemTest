
## Build Instructions

##### You will need to install these, and should probably do so globally.

* [NodeJS](https://nodejs.org/en/)
* [Git](https://git-scm.com/)
* bower package manager
* virtualenv

##### Once Those are installed, get a virtual environment up, and install the site and it's dependencies. Paste these into the command line, one line at a time.

```
    virtualenv nem.io
    cd nem.io
    source bin/activate
    git clone https://github.com/saulgray/nemTest.git
    cd nemTest
    bower install
    npm install
```
You must add a config file, this houses the google docs info.
Make sure the config file is at the same level as `gulpfile.js`
```
nano config.json
```
you must either create a google doc, or get the keys from Saul.
I will fix this in the future so it can be built without worrying about the `config.json` file.

##### After the config file is in place

```
foundation watch
```
Now you should have a webpage that opened to `localhost:8760`.
This port can be changed in `gulpfile.js`.

To build for production, use:
```
foundation watch --production
```
This will minify JS, compress images, etc.
