const deleteBTN = document.querySelectorAll(".deleteBTN");

deleteBTN?.forEach((wrap) => {
    wrap.addEventListener("click", async (event) => {
        if (event.target.nodeName === "BUTTON") {
            const dataUrl = event.target.dataset.url;
            const response = await fetch(dataUrl, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            });

            if(response.ok){
                const data = await response.json();
            if (data.text === "OK") {
              //some logic
            }
        }
        }
    });
});
