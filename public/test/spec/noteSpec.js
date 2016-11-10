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
	  console.log("Failed: Doesn't have header");
	}
	if (document.getElementById("left-content").innerText.includes("Bala")){
	  console.log("Passed: Content present");
	} else {
	  console.log("Failed: Doesn't have content");
	}

// test for url with hashchange
	document.getElementById("bosco").click();

	if (window.location.hash.split("#")[1] === "First_note"){
		console.log("Passed: hashchange test");
	} else {
		console.log("Failed: hashchange test");
	}

// test for smth showing up after clicking header
	document.getElementById("bosco").click();
	if (document.getElementById("right-content").innerText.includes("Sloth")){
		console.log("Passed: Showing Sloth in note space");
	} else {
		console.log("Failed: Not showing Sloth in note space");
	}

};

note = new Note("First note", "Julio, Dagmara, Caitlin, Mike and Asif");

assert.toBe(note.header, "First note");
assert.toBe(note.text, "Julio, Dagmara, Caitlin, Mike and Asif");
assert.toBe(note.shortText, "Julio, Dagmara, Cait");
