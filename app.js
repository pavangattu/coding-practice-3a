const express = require("express");

const app = express();

const addDays = require("date-fns/addDays");

const today = new Date();

const afterHundDays = addDays(new Date(today), 100);

const format = `${afterHundDays.getDate()}/${
  afterHundDays.getMonth() + 1
}/${afterHundDays.getFullYear()}`;

app.get("/", (request, response) => {
  response.send(format);
});

module.exports = app;
