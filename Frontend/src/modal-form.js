const ModalForm = document.forms.ModalForm;
const checkbox = document.getElementById('taxationCheck')

ModalForm.transactionSelection.addEventListener('change', e => {
    let form = e.target.form;
    form.categorySelection.disabled = (e.target.value == 'income');
});

checkbox.addEventListener('change', e => {
    if (e.currentTarget.checked) {
        checkbox.value = 'true'
    }
    else {
        checkbox.value = 'false'
    }
});

function sendFormData(event) {
    event.preventDefault(); // Verhindert das Standard-Formular-Submit-Verhalten

    const formData = {
        transactionType: ModalForm.transactionSelection.value,
        name: ModalForm.inputTitle.value,
        category: ModalForm.categorySelection.value,
        date: ModalForm.inputDate.value,
        value: ModalForm.inputAmount.value,
        taxation_relevant: checkbox.value
    };

    const jsonData = JSON.stringify(formData);

    fetch('http://localhost:4444/v1/newTransaction', { // Ersetzen Sie 'YOUR_SERVER_ENDPOINT' durch Ihre Server-URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Fügen Sie hier die Logik hinzu, die nach erfolgreichem Senden der Daten ausgeführt werden soll
    })
    .catch((error) => {
        console.error('Error:', error);
        // Fügen Sie hier die Fehlerbehandlungslogik hinzu
    });
}