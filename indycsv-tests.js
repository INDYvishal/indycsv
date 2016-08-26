// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by indycsv.js.
import { indycsv as packageName } from "meteor/indycloud:indycsv";

// Write your tests here!
// Here is an example.
Tinytest.add('indycsv - example', function (test) {
  test.equal(packageName, "indycsv");
});
