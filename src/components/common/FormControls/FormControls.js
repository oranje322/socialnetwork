import React from 'react'
import styles from './FormControls.module.css'

export const TextArea = (props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                <textarea {...props.input} {...props} />
            </div>
            {hasError && <span> {props.meta.error}</span>}
        </div>
    )
}

export const Input = (props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                <input {...props.input} {...props} />
            </div>
            {hasError && <span> {props.meta.error}</span>}
        </div>
    )
}