const saveBTNs = document.querySelectorAll('.saveBTN')
saveBTNs.forEach((saveBTN)=>{
    saveBTN.addEventListener("click", async (e) => {
        e.preventDefault();
    try {
        if(saveBTN.dataset.flag==='save'){
            const body = {flag:'save'}
            const response = await fetch(saveBTN.dataset.url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const data = await response.json();

            if (data.text === 'OK') {
                saveBTN.classList.add('deleteDesign')
                saveBTN.classList.remove('saveDesign')
                saveBTN.innerText = 'delete';
                saveBTN.dataset.flag = 'delete'
            }
return
        }if(saveBTN.dataset.flag==='delete'){
            const body = {flag:'delete'}
            const response = await fetch(saveBTN.dataset.url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const data = await response.json();

            if (data.text === 'OK') {
                saveBTN.classList.remove('deleteDesign')
                saveBTN.classList.add('saveDesign')
                saveBTN.innerText = 'save';
                saveBTN.dataset.flag = 'save'

            }
            return

        }


    } catch (err) {
        console.log(err.message);
    }
});

})
