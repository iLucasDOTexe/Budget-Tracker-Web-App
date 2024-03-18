const addModalForm = document.forms.addModalForm;

addModalForm.transactionSelection.addEventListener('change', e => {
    let form = e.target.form;
    form.categorySelection.disabled = (e.target.value == 'income');
});