const scriptURL =
	"https://script.google.com/macros/s/AKfycbxVCHnC2buvjNzI9JlmutlCPlj-ZnrzYKynL1xQhUW5h2TcJkY/exec";
const form = document.forms["submit-to-google-sheet"];function handleClick() {
    document.querySelector(".row").classList.remove("display");
}

function openForm() {
    document.querySelector(".form-container").classList.remove("display");
    document.querySelector(".row").className = "display"
    document.querySelector(".back").classList.remove("display");
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
            window.location.href="/index.html";
        })
		.catch((error) => console.error("Error!", error.message));
});