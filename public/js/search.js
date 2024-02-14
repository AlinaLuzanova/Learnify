const searchForm = document.forms['searchForm'];

searchForm?.addEventListener('submit', async function(e){
    e.preventDefault();
    try {
        const formData = new FormData(searchForm);
        const query = formData.get('query');
        const response = await fetch(searchForm.dataset.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: query })
        });

        if (response.ok) {
            const data = await response.json();
            switch (data.text) {
                case 'OK':
                    window.location.href = `/search/${query}`;
                    break;
                case 'ERROR':
                    alert('No matches found');
                    break;
            }
        } else if (response.status === 404) {
            myInput.textContent = 'No matches found';
            myModal.style.display = 'block';
        } else {
            alert('An error occurred');
        }
    } catch (error) {
        console.log(error.message);
    }
});
