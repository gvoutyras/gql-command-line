#!/usr/bin/env node
const fs = require("fs");
const { program } = require("commander");

const pwd = process.cwd();

program.version("0.0.1");

function generateTypedefHandler(value) {
  const filename = value;

  try {
    const data = fs.readFileSync("./templates/typedef", "utf8");
    fs.writeFile(`${pwd}/${filename}.js`, data, (err) => {
      if (err) throw err;
      console.log("File was created successfully.");
    });
  } catch (err) {
    console.error(err);
  }
}

function generateResolverHandler(value) {
  const filename = value;

  try {
    const data = fs.readFileSync("./templates/resolver", "utf8");
    fs.writeFile(`${pwd}/${filename}.js`, data, (err) => {
      if (err) throw err;
      console.log("File was created successfully.");
    });
  } catch (err) {
    console.error(err);
  }
}

program
  .option(
    "-typedef, --genType <filename>",
    "generate typedef",
    generateTypedefHandler
  )
  .option(
    "-resolver, --genRes <filename>",
    "generate typedef",
    generateResolverHandler
  );

program.parse(process.argv);

// writeFile function with filename, content and callback function
