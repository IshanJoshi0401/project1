const scriptURL = 'https://script.google.com/macros/s/AKfycbwKb9g4KYiaJGZj3HsfWYuOzc_EnBRF2McPEIBpgX70LRSep_Z-AACLS3N6Hwsi9tEp0g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, {method : 'POST', body: new FormData(form)})
    .then(response => alert ("Thank you ! your form is submitted successfully"))
    .then(() => {window.location.reload();})
    .catch(error => console.error('error!',error.message))
})