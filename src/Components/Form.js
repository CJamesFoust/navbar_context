import React from "react";
import styles from './Form.module.css';
import NameContext from '../context/NameContext';


const Form = () => {

    return (
        <NameContext.Consumer>
            {NameContext => (
                <div className={styles.formDiv}>
                    <label>Your Name:</label>
                    <input type="text" onChange={ (e) => {NameContext.setName(e.target.value)}}></input>
                </div>
            )}
        </NameContext.Consumer>
    )
}

export default Form;