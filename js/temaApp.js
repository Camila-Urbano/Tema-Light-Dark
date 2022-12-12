const boton_switch = document.getElementById('switch');
boton_switch.addEventListener('click', () =>
{
    document.body.classList.toggle('temaDark');
    boton_switch.classList.toggle('active');
})