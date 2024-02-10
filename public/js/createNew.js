const newForm = document.forms["newForm"];

newForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const formData = Object.fromEntries(new FormData(newForm));
        const response = await fetch("/api/subscriptions/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await response.json();

        switch (response.status) {
            case 200:
                //some logic
                break;
            case 400:
                //some logic
                break;
            case 401:
                //some logic
                break;
            case 500:
                //some logic
                break;
            default:
                console.log("Unexpected Error");
        }
    } catch (err) {
        console.log(err.message);
    }
});


