# Guestbook example with AngularJS
  Development is setup in minutes by [Yeohman](http://yeoman.io/index.html).  
  It uses a mongoDb resource to handle the backend in a restfull way.
### What's needed  
*(only if you want to tryout MongoLab as a service)*

  Go to the [MongoLab website](https://mongolab.com/welcome/) and follow the instructions to create
  a (free) account.

##### With the account:  
* create a database
+ create a collection

The MongoLab **api-key** is needed to get access to the remote database.

Add the following code to the main module:
```javascript
//mongolab config
app.constant('MONGOLAB_CONFIG',{API_KEY:'api-key', DB_NAME:'database-name'});
```