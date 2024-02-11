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
                const card = document.createElement('li');
                card.classList.add('comment');
                card.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${data.login}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Rating: <span>${formData.numberInput}</span></h6>
        <p class="card-text">${formData.commentInput}</p>
      </div>
    </div>
  `;
                const commentsContainer = document.querySelector('.commentsContainer');
                commentsContainer.appendChild(card);
                return card;
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


