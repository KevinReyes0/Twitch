export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textArea
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field);
    }

    const handlerInputBlur = (event) => {
        onBlurHandler(event.target.value, field);
    }

    return (
        <>
            <div className="auth form label">
                <span>{label}</span>
            </div>
            <div>
                {textArea ? (
                    <textArea
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handlerInputBlur}
                        rows={5}
                        style={{maxWidth: '400px'}}
                    />
                ) : (
                    <input
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handlerInputBlur}
                    />
                )}
                <span className = "auth-from-validation-message">
                    {showErrorMessage && validationMessage}
                </span>
            </div>
        </>
    )
}
