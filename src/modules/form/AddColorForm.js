import React, {useRef} from 'react';

const AddColorForm = ({onNewColor = f => f}) => {
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = (e) => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        onNewColor(title, color);
        txtTitle.current.value = "";
        hexColor.current.value = "";
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input ref={txtTitle} type="text" required/>
                <input ref={hexColor} type="color" required/>
                <button>ADD</button>
            </form>
        </div>
    );
};

export default AddColorForm;