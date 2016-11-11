//tests adding a note
function beforeAll(callback){
	document.getElementById("text").value = "Julio, Dagmara, Caitlin, Mike and Asif";
	document.getElementById("header").value = "Panda";
	document.getElementById("addNote").click();
	document.getElementsByTagName("a")[0].click();
	setTimeout(function() {
		callback();
	}, 500);
};

window.onload = function() {
	beforeAll(function(){
		//test if a note can be added
		if (document.getElementById("left-content").innerText.includes("Panda")){
			console.log("Passed: Header present");
		} else {
			console.log("Failed: Doesn't have header");
		}
		if (!document.getElementById("left-content").innerText.includes("lin, Mike and Asif")){
			console.log("Passed: Note is abbreviated");
		} else {
			console.log("Failed: Note is not abbreviated");
		}

		if (document.getElementById("left-content").innerText.includes("Julio, Dagmara, Cait")){
			console.log("Passed: Abbreviated note showing");
		} else {
			console.log("Failed: Abbreviated note is not showing");
		}

		// test if header is a link
		if (document.getElementsByTagName("a")[0].innerHTML === "Panda") {
			console.log("Passed: Header is a link");
		} else {console.log("Failed: Header is not a link");}
		if (document.getElementsByTagName("a")[0].href == "http://localhost:8080/#1") {
			console.log("Passed: link is '#' ");
		} else {console.log("Failed: link is not '#' ");}

		// test for url with hashchange
		if (window.location.hash.split("#")[1] === "1"){
			console.log("Passed: hashchange test");
		} else {
			console.log("Failed: hashchange test");
		}

		// test for note showing up after clicking its header
		if (document.getElementById("right-content").innerText.includes("Panda")){
			console.log("Passed: Showing note header");
		} else {
			console.log("Failed: Not showing note header");
		}
		if (document.getElementById("right-content").innerText.includes("Julio, Dagmara, Caitlin, Mike and Asif")){
			console.log("Passed: Showing note text");
		} else {
			console.log("Failed: Not showing note text");
		}

	});

};


// UNIT TESTS
note = new Note("First note", "Julio, Dagmara, Caitlin, Mike and Asif");

assert.toBe(note.header, "First note");
assert.toBe(note.text, "Julio, Dagmara, Caitlin, Mike and Asif");
assert.toBe(note.shortText, "Julio, Dagmara, Cait");
