export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

export const emailValidateMessage = 'Por favor ingrese una direccion de correo electronico valida.';