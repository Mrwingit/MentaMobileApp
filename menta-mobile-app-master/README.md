## Final Senior Project for CSC 4330 
#### LSU - Fall 2019
#### Software Systems and Development (Software Engineering) 
#### Developed by: Ian Andrepont, Tri Nguyen, Hieu Mai, Leigh Wright, Walter Scott


![Menta Logo](./assets/menta-log.png)

# menta-mobile-app

### Instructions to run:
##### Prerequisites: 
- make sure to [node.js](https://nodejs.org/en/) is installed on your Mac, Windows, or Linux machine 
- once you have node.js, run `npm install -g expo-cli` in a terminal window in your **root folder**
- insall the **Expo Client App** to your smart phone from the App Store or Google Play Store. No need to make an account. 

##### Instructions:
- **download** this repo to a folder on your computer
- `cd` inside a terinal window to the folder that contains this project
- run `npm install` to install all the project dependancies
- run `npm start` to start Expo (Expo should start running in your default browser)
- look for a **QR code** from Expo in your browser (bottom left), scan it with the phone you have Expo Client installed on.
- your phone should open the Expo Client App and start loading a javascript bundle
- once it loads you are good to go!

### Description: 
Menta is a mobile applicaiton designed for the use by LSPAC - MODELS, an organizaiton that helps minority students tranisiton into PhD progams. 

The applicaiton's purpose is to connect students with mentors that will be able to specifically help them get into the PhD program they are interested in.

### Features:
##### all features are fully functional and contained NO hardcoding or "rigging"
- Compatible with iOS and Android
- Matching system for mentees and mentors to send requests and connect with each other
- Individual messaging between mentees and mentors
- Newsfeed that connects a user and their other connections
- Mentor applicaiton process
- Admin approval process
- Secure Authentication with multi factor sign up

### Frontend:
Menta is built using [React Native](https://facebook.github.io/react-native/) - a cross platofrom mobile application framework. In addition, the application is supplemented by [Expo](https://expo.io/).

### Backend: 
We built the backend for Menta using [AWS amplify](https://aws.amazon.com/amplify/) - a fully serverless application framework from Amazon Web Services. Serverless means there is no server running our application's storage and database. The benefits of this are that the charges are much more closely correlated to actual use and the applicaiton is able to scale at very high levels without us haveing to partition any new servers. 

In conjuncion with AWS Amplify, we used AWS Cognito for authentication, AWS DynamoDB for our database, AWS S3 for our file storage, and AWS Appsync as a GraphQL API to connnect to our Database. 

