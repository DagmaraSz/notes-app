// var test = new FeatureTest()

//tests the note exists

// test.visit("http://localhost:8080/", function () {
//   test.toHaveText("First note");
//   test.toHaveText("2nd note");
// });

//tests adding a note
window.onload = function() {
	document.getElementById("text").value = "Bala";
	document.getElementById("header").value = "Panda";
	document.getElementById("addNote").click();
	if (document.getElementById("left-content").innerText.includes("Panda")){
	  console.log("Passed: Header present");
	} else {
	  console.log("Failed: Doesn't have header")
	}
	if (document.getElementById("left-content").innerText.includes("Bala")){
	  console.log("Passed: Content present");
	} else {
	  console.log("Failed: Doesn't have content")
	}
}


//test for creating new note
note = new Note("First note", "bla bla");

assert.toBe(note.header, "First note");
assert.toBe(note.text, "bla bla");
