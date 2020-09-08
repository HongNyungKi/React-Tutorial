import { useState, useCallback } from 'react';

function UseInputs(initialForm) {
    const [form, setForm] = useState(initialForm)
    const onChange = useCallback(
        (e) => {
            setForm(form => ({ ...form, [e.target.name]: e.target.value }))
        }, []
    )
    const reset = useCallback(() => setForm(initialForm), [initialForm])

    return [form, onChange, reset]
}

export default UseInputs 