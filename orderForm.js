
function showOrderPopup(){
    const popup = document.querySelector('.popup');
    const closeButton = document.querySelector('.closeButton');

    popup.classList.add('active');

    closeButton.onclick = () => {
    popup.classList.remove('active');
    }
}

const form = document.getElementById('orderForm');
form.addEventListener('submit', (e) => {
    let valid = true;

    const nameRegex = /^[A-Za-zÅÄÖåäö\s]{2,50}$/;
    const emailRegex = /^[A-Za-zÅÄÖåäö0-9._%+-]+@[A-Za-zÅÄÖåäö0-9.-]+\.[A-Za-z]{2,50}$/;
    const phoneRegex = /[0-9]{1,20}]/;
    const addressRegex = /^[A-Za-zÅÄÖåäö\s]{2,50}$/;
    const postalnrRegex = /[0-9]{5}]/;
    const countyRegex = /[A-Za-zÅÄÖåäö]{2,20}/;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const postalnr = document.getElementById('postalnr');
    const county = document.getElementById('county');

    if (!nameRegex.test(name.value)){
        valid = false;
    }
    if (!emailRegex.test(email.value)){
        valid = false;
    }
    if (!phoneRegex.test(phone.value)){
        valid = false;
    }
    if (!addressRegex.test(address.value)){
        valid = false;
    }
    if (!postalnrRegex.test(postalnr.value)){
        valid = false;
    }
    if (!countyRegex.test(county.value)){
        valid = false;
    }

    if (!valid){
        e.preventDefault();
        alert("Form validation failed");
    }
})