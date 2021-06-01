import { readFile } from "fs/promises";
import { validate } from "jsonschema";

(async () => {
  const dataStrs = await Promise.all(
    ["./index.json", "./index.spec.json"].map((file) => readFile(file, "utf-8"))
  );
  const [data, schema] = dataStrs.map(JSON.parse);
  validate(data, schema, {
    throwAll: true,
  });
})();
