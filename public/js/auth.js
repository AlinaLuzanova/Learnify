const registerForm = document.forms['registerForm'];
const loginForm = document.forms['loginForm'];
const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');
const closeBtn = document.getElementById('closeBtn')
registerForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        const body = Object.fromEntries(new FormData(registerForm));
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.message === 'OK') {
                window.location.assign('/');
            } else {
                myInput.textContent = data.message;
                myModal.style.display = 'block';
            }
        } else {
            // Обработка ошибок сервера
            const errorData = await response.json();
            myInput.textContent = errorData.message || 'Ошибка при регистрации';
            myModal.style.display = 'block';
        }
    } catch (e) {
        console.log(`Error: ${e.message}`);
    }
});

loginForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        const body = Object.fromEntries(new FormData(loginForm));
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.message === 'OK') {
                window.location.assign('/');
            } else {
                myInput.textContent = data.message;
                myModal.style.display = 'block';
            }
        } else {
            const errorData = await response.json();
            myInput.textContent = errorData.message || 'Login failed';
            myModal.style.display = 'block';
        }
    } catch (e) {
        console.log(`Error: ${e.message}`);
    }
});


myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})
closeBtn.addEventListener('click',()=>{
    myModal.style.display = 'none'
})
