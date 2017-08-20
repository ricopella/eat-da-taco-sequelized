# Eat Dos Tacos

## Overview &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Eat-Dos-Tacos is a Sequel to [Eat-Da-Taco](https://github.com/ricopella/eat-da-taco). This is a Full-Stack application with a Front-End implented with HTML/CSS and templating from Handlebars framework. The Back-End consists of Node.js, Express, and **Sequelize**.

## Instructions

A user is able to create a taco name to add to the menu. Once a new taco is created, it's added to the `Ready to Eat` section. The user then can choose to `Devour` the taco. Before they can `Devour` the taco, they must enter their name. If a name was given & taco was devoured, the menu item updates to the `Devoured` section and lets you know who ate it.

* If you hover over a taken (devoured or not) it will tell you when it was created (not devoured) or eaten (devoured).

* In both `Ready to Eat` and `Devoured` sections, taco's are listed in Assecending order.

## Installation

1. `git clone https://github.com/ricopella/eat-dos-tacos` the repository to your local computer
2. `git bash` into the directory created by the clone
3. Run `npm install`
4. Run `schema.sql` in appropriate MySqQL database
5. Update connection string to reflect credentials for your DB instance
6. **[optional]** run seeds.sql in appropriate database to get prepopulated data for app

#### Dependencies 

List of required dependencies which can be gathered by `npm install` once repository is cloned

```
{
  "dependencies": {
       "body-parser": "^1.17.2",
        "express": "^4.15.4",
        "express-handlebars": "^3.0.0",
        "method-override": "^2.3.9",
        "mysql": "^2.14.1",
        "mysql2": "^1.4.0",
        "sequelize": "^4.5.0"
    }
}
```

#### Directory Structure

```
.
├── config
│   └── config.json
│ 
├── controllers
│   └── taco_controller.js
│
├── db
│   ├── schema.sql
│   ├── schemaHeroku.sql
│   └── seeds.sql
│
├── models
│   ├── customers.js
│   ├── index.js
│   └── taco.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── normalize.css
│       │   └── taco_style.css
│       │   └── reset.css
│       ├── images
│       │   └── taco-.png
│       └── js
│           └── app.js
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
# Packages Used

* [Node.JS](https://www.npmjs.com/)
* [MySQL](https://www.npmjs.com/package/mysql)
* [Express](https://www.npmjs.com/package/express)
* [Sequelize](http://docs.sequelizejs.com/)
* [Handlebars](https://www.npmjs.com/package/express-handlebars)
* [MySQL](https://www.npmjs.com/package/mysql)
* [Heroku](https://www.npmjs.com/package/heroku)

# History

Created on 8/13/17

# License

MIT