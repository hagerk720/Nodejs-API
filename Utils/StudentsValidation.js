const Ajv = require("ajv");
const ajv = new Ajv();
const studentsSchema = {
  type: "object",
  properties: {
    name: { type: "string", pattern: "^[a-zA-Z0-9]+$" },
    dept: { type: "string", pattern: "^[a-zA-Z]+$" },
    age: { type: "number" },
  },
  required: ["name", "dept", "age"],
  additionalProperties: false,
};
module.exports = ajv.compile(studentsSchema);
