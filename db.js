const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bitebuilder.db');

// Table creation queries
const createUserTable = `
CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME TEXT NOT NULL,
    EMAIL TEXT UNIQUE NOT NULL,
    PASSWORD TEXT NOT NULL,
    ISADMIN INT
)`;
const createSandwichTable = `
CREATE TABLE IF NOT EXISTS SANDWICH (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME TEXT NOT NULL,
    DESCRIPTION TEXT NOT NULL,
    PRICE REAL NOT NULL,
    STOCK INT NOT NULL,
    USER_ID INT,
    FOREIGN KEY (USER_ID) REFERENCES USER(ID)
)`;
const createIngredientTable = `
CREATE TABLE IF NOT EXISTS INGREDIENT (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME TEXT NOT NULL,
    PRICE REAL NOT NULL
)`;
const createCartItemTable = `
CREATE TABLE IF NOT EXISTS CART_ITEM (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    USER_ID INT NOT NULL,
    SANDWICH_ID INT NOT NULL,
    QUANTITY INT NOT NULL,
    PRICE REAL NOT NULL,
    FOREIGN KEY (USER_ID) REFERENCES USER(ID),
    FOREIGN KEY (SANDWICH_ID) REFERENCES SANDWICH(ID)
)`;
