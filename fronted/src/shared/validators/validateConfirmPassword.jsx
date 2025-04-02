export const validateCongirmPassword = (pass, confPass) => {
    return pass === confPass
}

export const passwordConfirmationMessage = 'Las passwords no coinciden.';