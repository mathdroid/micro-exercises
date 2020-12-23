const fs = require("fs");
const qs = require("querystring");

const handler = (req, res) => {
  const queryString = req.url.slice(2);

  const person = qs.parse(queryString);

  fs.writeFileSync(`${person.name}.json`, JSON.stringify(person));

  return fs.readFileSync("./package.json", "utf-8");
};

module.exports = handler;

// const handler = (req, res) => {
//     const data = fs.readFileSync("./package.json", "utf-8");
//     return data;
//   };
