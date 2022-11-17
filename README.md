# Project-2-Late-Night-Coders

## Calorie Tracker

### Description

In this Project we created a full stack calorie tracker app. Which utilizes an MVC framework using MySQL, Express.js, Sequelize, Chart.js and handlebars.js in order to allow users to create secure accounts and perform appropriate CRUD operations allowed by the server, to better organize there daily calorie intake.

Heroku deployed app:
(https://daily-fit.herokuapp.com/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Badges](#Badges)
- [Features](#Features)
- [Questions](#Questions)

## Installation

To Install:

Install node.js lts

Clone the repository from GitHub (https://github.com/ajsherrill2/Project-2-Late-Night-Coders.git).

Run these command lines in your terminal to install necessary dependencies:

```
npm init -y
npm install
```

Additional installations (sequalize, mysql2, and dotenv)

```
npm i sequalize
npm i mysql2
npm i dotenv
npm i bcrypt
npm i connect-session-sequelize
npm i express
npm i express-handlebars
npm i express-session
```

Please Run "SOURCE db/schema.sql;" atleast once in your MySQL terminal.

```
mysql -u root -p
-SOURCE db/schema.sql;
```

Please change ".env.EXAMPLE" to ".env" and provide personal DB_PASSWORD, DB_NAME, DB_USER and DB_SESS.

## Usage

Direct your terminal to the repository root directory and run this command line to initiate application:

```
npm seed
```

Then

```
npm start
```

Direct your browser to "http://localhost:3001/"

## License

This application is covered under the MIT license.

## Badges

![license](https://img.shields.io/badge/license-MIT-yellow.svg)

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

![badmath](https://img.shields.io/github/repo-size/ajsherrill2/Project-2-Late-Night-Coders)

## Features

Features you will find in this app include:

- create, read, update, and delete operations
- Third party api CalorieNinja install via node-fetch
- easy access to sum of nutrients via tables and charts

## Questions

If you have any questions about the repo open an issue or contact me directly at adamsherrill2@gmail.com. You can find more of my work at [ajsherrill2](https://github.com/ajsherrill2/).