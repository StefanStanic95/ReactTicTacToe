import { useState } from "react";

export class FieldInfo{
    field: string;

    constructor(field: string){
        this.field = field;
    }
}

export function Field(props: any) {
    const fieldClick = function() {
        if(field !== ""){
            return;
        }
        if(props.player === 1) {
            setField('X');
            props.reportState('X', props.index);
            props.setPlayer(2);
        }
        else {
            setField('O');
            props.reportState('O', props.index);
            props.setPlayer(1);
        }
        props.checkWinner();
    }

    const [field, setField] = useState('');
    
    return (
        <div className="field" onClick={() => fieldClick()}>
            <small>{props.index}</small>
            {field}
        </div>
    )
}