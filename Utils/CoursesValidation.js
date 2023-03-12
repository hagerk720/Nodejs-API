const Ajv = require("ajv");
const ajv = new Ajv();
const coursesSchema = {
  type: "object",
  properties: {
    name: { type: "string", pattern: "^[a-zA-Z0-9]+$" },
    instructorName: { type: "string", pattern: "^[a-zA-Z]+$" },
  },
  required: ["name", "instructorName"],
  additionalProperties: false,
};
module.exports = ajv.compile(coursesSchema);
