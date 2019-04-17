Movie Rental Store

This project is the backend app in Node.js,Express.js,javascript,mongodb as a database, an imaginary video rental app.Where customer can create an account and then get any type movie on rent,can put movie of any type of genere etc.

Setup.

Make sure to follow all these steps exactly as explained below. Do not miss any steps or you won't be able to run this application.

Install MongoDB

To run this project, you need to install the latest version of MongoDB Community Edition first.

Install the Dependencies

Next, from the project folder, install the dependencies:
npm i

Populate the Database
node seed.js

Run the Tests
You're almost done! Run the tests to make sure everything is working:

npm test

All tests should pass.

Start the Server
node index.js

This will launch the Node server on port 3900. If that port is busy, you can set a different point in config/default.json.

Open up your browser and head over to:

http://localhost:3900/api/genres
You should see the list of genres. That confirms that you have set up everything successfully.

Deployment
The is deployed on heroku on the address https://chirayumoviestore.herokuapp.com/api/genres


License

This project is licensed under the MIT License - [LICENSE.md](LICENSE.md)

