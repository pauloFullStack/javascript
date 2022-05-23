document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('select-tipo-lancamento').addEventListener('change', function () {
        var select_tipo_lancamento = document.querySelector('#select-tipo-lancamento').value;
        console.log(select_tipo_lancamento);
    });
});