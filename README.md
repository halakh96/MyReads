# <img src="public/favicon.ico" width="50px"> NReads


## Introduction
NReads is a simple book cataloging app that allows you to place books on one of three shelves or categories. Currently Reading, Want to Read, or the Read shelf. It also allows you to search for books based on their title and author.


### Technologies Used:
* HTML
* CSS
* React Js
* [`BooksAPI`](src/Api.js)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The project can be built with npm or yarn, so choose one of the approach bellow in case you don't have any installed on your system.

* **Npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/)

* **Yarn** is a package manager built by Facebook Team and seems to be faster than npm in general.  [Download Yarn](https://yarnpkg.com/en/docs/install)

### Installing

Then install dependencies and run:

```
yarn install
yarn start
```

or

```
npm install
npm run start
```


## Backend Server

To simplify development process, will use a backend server that development by Udacity. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods will need to perform necessary operations on the backend:


To simplify the development process, will use a backend server API by Udacity. [`BooksAPI.js`](src/Api.js) contains the methods that will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)
