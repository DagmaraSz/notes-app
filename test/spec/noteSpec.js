var test = new FeatureTest()

//tests the note exists

test.visit("http://localhost:8080/", function () {
  test.toHaveText("First note");
  test.toHaveText("2nd note");
});

//tests adding a note
test.visit("http://localhost:8080/", function () {
  test.toHaveText("Add note");
});

note = new Note("First note", "bla bla");

assert.toBe(note.header, "First note");
assert.toBe(note.text, "bla bla");
