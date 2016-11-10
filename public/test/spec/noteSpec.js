var test = new FeatureTest()

//tests the note exists

test.visit("http://localhost:8080/", function () {
  test.toHaveText("First note");
  test.toHaveText("2nd note");
});

//test for creating new note






note = new Note("First note", "Julio, Dagmara, Caitlin, Mike and Asif");

assert.toBe(note.header, "First note");
assert.toBe(note.text, "Julio, Dagmara, Caitlin, Mike and Asif");
assert.toBe(note.shortText, "Julio, Dagmara, Cait");
