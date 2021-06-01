const { validate } = require("jsonschema");

const [data, schema] = [require("./index.json"), require("./index.spec.json")];

validate(data, schema, {
  throwAll: true,
});
