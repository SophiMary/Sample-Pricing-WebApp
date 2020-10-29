const scriptURL =
	"https://script.google.com/macros/s/AKfycbxVCHnC2buvjNzI9JlmutlCPlj-ZnrzYKynL1xQhUW5h2TcJkY/exec";
const form = document.forms["submit-to-google-sheet"];

let badWords = /abbo|beeyotch|biatch|bitch|chinaman|chinamen|chink|coolie|coon|crazie|crazy|crip|cuck|cunt|dago|daygo|dego|dick|douchebag|dumb|dyke|eskimo|fag|faggot|fatass|fatso|fuck|gash|gimp|golliwog|gook|goy|goyim|gyp|gypsy|halbreed|halfbreed|heeb|homo|hooker|idiot|insane|insanitie|insanity|jap|kaffer|kaffir|kaffir|kaffre|kafir|kike|kraut|lame|lardass|lesbo|lunatic|mick|negress|negro|nig|ninog|nigga|nigger|nigguh|nip|pajeet|paki|pickaninnie|pickaninny|prostitute|pussie|pussy|raghead|retard|sambo|shemale|skank|slut|soyboy|spade|sperg|spic|spook|squaw|street-shitter|tard|tits|titt|trannie|tranny|twat|wetback|whore|wigger|wop|yid|zogi/gi;

function handleClick() {
	document.querySelector(".row").classList.remove("display");
}

function openForm() {
	document.querySelector(".form-container").classList.remove("display");
	document.querySelector(".row").className = "display";
	document.querySelector(".back").classList.remove("display");
}

function profanityCheckName() {
	let nameCheck = document.querySelector(".name");
	let nameValue = nameCheck.value.replace(badWords, '#*#$*#');
	alert("Profanity Check");
	nameCheck.value = nameValue;
}
function profanityCheckEmail() {
	let emailCheck = document.querySelector(".email");
	let emailValue = emailCheck.value.replace(badWords, '#*#$*#');
	alert("Profanity Check");
	emailCheck.value = emailValue;
}
function profanityCheckText() {
	let textCheck = document.querySelector(".text");
	let textValue = textCheck.value.replace(badWords, '#*#$*#');
	alert("Profanity Check");
	textCheck.value = textValue;
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	fetch(scriptURL, {
		method: "POST",
		body: new FormData(form),
	})
		.then((response) => {
			console.log("Success!", response.status);
			alert("Data Successfully Submitted");
			window.location.href =
				"/Sample-Pricing-WebApp/";
		})
		.catch((error) => console.error("Error!", error.message));
});


