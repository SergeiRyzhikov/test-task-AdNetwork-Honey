import React, { useState } from 'react';

function debounce(func: (...args: any[]) => void, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    return function (...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

function sendRequest(value: string) {
    console.log(`Отправка значений на сервер: ${value}`);
}
const debouncedRequest = debounce(sendRequest, 1000)

const DebounceInput: React.FC = () => {

    const [value, setValue] = useState<string>('');

    function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value);
        debouncedRequest(e.currentTarget.value);
    }

    return (
        <div>
            <h3>Debounce Input</h3>
            <input type="text" value={value} onChange={inputHandler} />
        </div>
    );
}

export default DebounceInput;
