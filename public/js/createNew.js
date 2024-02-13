
const newForm = document.forms["ratingForm"];
//const myModal = document.getElementById('myModal');
//const myInput = document.getElementById('myInput');

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
        if (data.text === 'OK') {
            const card = document.createElement('li');
            card.innerHTML = `
<div class="comment">
    <div class="card">
      <div class="card-body" id="card-body">
        <h5 class="card-title">User: <span style="color:#007bff">{data.login}</span></h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Rating: <span>${formData.numberInput}</span></h6>
        <p class="card-text">${formData.commentInput}</p>
      </div>
    </div>
    </div>
  `;
            const commentsContainer = document.querySelector('.commentsContainer');
            commentsContainer.firstElementChild.nextElementSibling.prepend(card);
        }

            if (data.text ==='You can\'t add comments') {
                myInput.textContent = data.message;
                myModal.style.display = 'block';
            }
            else{

            }


    } catch (err) {
        console.log(err.message);
    }
});


