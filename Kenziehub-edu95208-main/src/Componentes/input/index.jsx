import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, label, id, ...rest }, ref) => {
    return (
        <div className= {styles.titleinp} >
            <label htmlFor= {id}> {label} </label>
            <input id={id} ref= {ref} {...rest} />
            {error ? <p>{error.message}</p> : null}
        </div>

    );

}
)