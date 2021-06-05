var jsonschema = require("jsonschema");
var fs = require("fs");

var data = fs.readFileSync("./index.json");
var schema = fs.readFileSync("./index.spec.json");

jsonschema.validate(JSON.parse(data), JSON.parse(schema), {
  throwAll: true,
});
