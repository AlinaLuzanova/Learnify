const saveBTNs = document.querySelectorAll('.saveBTN')
console.log('works1')
saveBTNs.forEach((saveBTN)=>{
    console.log('works2')
    saveBTN.addEventListener("click", async (e) => {
        console.log('works3')

    try {
        console.log('works4')
        if(saveBTN.dataset.flag==='save'){
            const body = {flag:'save'}
            const response = await fetch(saveBTN.dataset.url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const data = await response.json();

            if (data.text === 'OK') {
                saveBTN.style.backgroundColor = '#007bff';
                saveBTN.style.color = 'white';
                saveBTN.innerText = 'delete';
                saveBTN.dataset.flag = 'delete'
            }

        }if(saveBTN.dataset.flag==='delete'){
            const body = {flag:'delete'}
            const response = await fetch(saveBTN.dataset.url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const data = await response.json();

            if (data.text === 'OK') {
                saveBTN.style.backgroundColor = '#white';
                saveBTN.style.color = '#007bff';
                saveBTN.innerText = 'save';
                saveBTN.dataset.flag = 'save'
            }

        }


    } catch (err) {
        console.log(err.message);
    }
});

})
