# Data

This app uses Atlas, a free cloud-hosting platform to store production data.

To connect the app to Atlas:

- Copy the .env-example file to .env
- Update the ATLAS_URI to the connection string for your Atlas

Contact a team member to work on the development team and get access to the production datastore. 

OR: Create your own Atlas account

## How to create an Atlas datastore

Follow the instructions here: <https://docs.atlas.mongodb.com/getting-started/>

## Create email account and login

Use an email account so the application can connect using an email address (not your Google account.)

##  Create a project

Click Try for free / MongoDB Cluster 

Name your project  (e.g. "hunt") & organization. 

Create project with default user (the email of the Atlas account).


## Create a cluster

Build a cluster / choose free option / create. 

Accept the defaults and create. 

## Get connection string

When your cluster window appears, wait for it to finish getting created. 



## Whitelist IP address

Get help from <https://docs.atlas.mongodb.com/security/add-ip-address-to-list/index.html>

Click CONNECT. In the Add your connection IP address to the IP Access List step, click Allow Access from Anywhere. Then "Add IP address" to add 0.0.0.0 to your list. 

## Create database user for your app

Follow instructions at <https://docs.atlas.mongodb.com/tutorial/create-mongodb-user-for-cluster/>

Click CONNECT or follow the setup wizard. 

Create username and password for your app. 

hunt

hunt-password

## Connect to your cluster

Click CONNECT or follow the setup wizard. 

Click connect with native drivers / Node.js.

Copy the connection string into .env.

mongodb+srv://hunt:<password>@cluster0.xwlop.mongodb.net/<dbname>?retryWrites=true&w=majority

Replace <password> with the password for the hunt user. Replace <dbname> with the name of the database(e.g., hunt) that connections will use by default. 

## Test app

```Powershell
npm install
npm run start
```

Open browser to <http://localhost:3000/>

## Connect your app

Use Mongoose as your ORM/ORD. 

Connect following 
[MDN tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs) 
and [example repo](https://github.com/mdn/express-locallibrary-tutorial).