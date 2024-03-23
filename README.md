# Getting Started with installing Node.js

### Open Terminal and copy below command

```
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
```


### Inspect the contents of the downloaded script with nano or your preferred text editor

``` 
$ nano /tmp/nodesource_setup.sh
```

### When you are satisfied that the script is safe to run, exit your editor. Then run the  below script (Optional)

```
$ sudo bash /tmp/nodesource_setup.sh
```

### PPA will be added to your configuration. Now, you can install the Node.js with below command

```
$ sudo apt install nodejs
```

### To check the version of Node.js run below code 

```
$ node -v 
```

# Installing MongoDB

### First import the MongoDB public GPG key

```
$ curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
```

Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# cwa_client
