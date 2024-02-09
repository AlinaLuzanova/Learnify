const { editForm } = document.forms;

editForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
        const formData = Object.fromEntries(new FormData(editForm));
        const response = await fetch(event.target.dataset.url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.text === "OK") {
            //some logic
        }
    } catch (e) {
        console.log(e.message);
    }
});
