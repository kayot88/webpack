it("should be able to ignore import()", () => {
	const fs = require("fs");
	const source = fs.readFileSync(__dirname + "/other.js", "utf-8");

	console.log(source);
});
