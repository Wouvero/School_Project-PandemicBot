# [School Project] PandemicBot

### Fundamentals of Cloud Technologies (Assignment #2), 2021
  

## Measuring the level of learning during a pandemic using a chat bot

### Introduction

The project provides the possibility to interact with a chat bot that allows processing data on the level of education during a pandemic. The results are completely anonymous and based on short answers the system evaluates the current visual level of learning.

The bot is provided by a cloud provider from Amazon (__Amazon Web Services__, later referred to as AWS). It goes by the name __Amazon Lex__



## Content

* [Core technologies](#Core_technologies)
* [Frontend](#Backend)
* [Backend](#backend)
* [Database](#Database)
* [Cloud services](#Cloud services)
  
## Core technologies
- ReactJS - JavaScript framework for frontend development
- NodeJS - is a module for JavaScript runtime
- Express - a back-end web application framework for Node.js
- Amazon Lex - interactive bot from AWS provider
- AWS Amplify - a set of tools and services that can be used together or separately to build websites
- Heroku Platform - a PaaS providing web application deployment
- Heroku ClearDB MySQL - MySQL database hosted on Heroku's cloud platform
- Netlify - cloud computing platform, offers hosting and server backend services for web applications

## Frontend
The frontend uses the React framework, which uses JavaScript as the scripting language.

It uses the Axions library to interface with the server, which provides communication between the frontend and the backend.

Charts are rendered on the frontend using the Chart.js library.

  

## Backend

Express.js was used to create the backend with the integration of several modules such as CORS (__Cross-Origin Resource Sharing__). Using requests from Express.js, we can create a communication between the database (hosted on the __Heroku__ platform) and the server, which provides us with data about all respondents. The individual data is then parsed and sent for processing into graphs.

  

## Database
A MySQL database is used. We chose Heroku as the cloud provider, mainly because it was the only one providing free tier hosting. We used MySQL Workbench 8.0 to create the database and then deploy it.

  

## Cloud services

### Amazon Lex
Represents the main functionality of this assignment, which is a chat bot. This service provides a user-friendly user interface through which we can directly set the way the conversation with the user will be conducted. It can save hours of work spent developing a similar service and is also able to use AI to recognize the user's emotions. The integration of this service is directly related to AWS Amplify.

### AWS Amplify
AWS Amplify is a set of tools and services that can be used together or separately to help web or mobile developers. It interacts directly with the application part using APIs, where it can create communication between the application and services from AWS.

### Heroku Platform
It is a PaaS platform that supports multiple programming languages. It runs customer applications in virtual containers that run in a reliable environment. It provides application hosting.

### Netlify
It is a cloud computing platform that offers hosting and server backend services for web applications.
