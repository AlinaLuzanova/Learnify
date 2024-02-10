const newForm = document.forms["ratingForm"];
const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');
newForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const formData = Object.fromEntries(new FormData(newForm));
        const response = await fetch(newForm.dataset.url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await response.json();

        switch (response.status) {
            case 200:
                myInput.textContent = data.message;
                myModal.style.display = 'block';
                break;
            case 400:
                myInput.textContent = data.message;
                myModal.style.display = 'block';
                break;
            case 401:
                myInput.textContent = data.message;
                myModal.style.display = 'block';
                break;
            case 500:
                myInput.textContent = data.message;
                myModal.style.display = 'block';
                break;
            default:
                console.log("Unexpected Error");
        }
    } catch (err) {
        console.log(err.message);
    }
});


