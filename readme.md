
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
    foundation watch
```

Now you should have a webpage that opened to `localhost:8765`
