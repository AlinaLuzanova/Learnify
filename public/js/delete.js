const profileContainer = document.querySelectorAll(".profileContainer");

profileContainer?.forEach((button) => {
    button.addEventListener("click", async (event) => {
        if (event.target.nodeName === "BUTTON") {
            const body = {flag:'delete'}
            const dataUrl = event.target.dataset.url;
            const response = await fetch(dataUrl, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            if(response.ok){
                const data = await response.json();
            if (data.text === "OK") {
                event.target.parentElement.parentElement.parentElement.parentElement.remove()
            }
        }
        }
    });
});
