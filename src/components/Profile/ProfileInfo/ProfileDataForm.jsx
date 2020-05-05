import React from "react";
import s from './ProfileInfo.module.css';
import {Field, reduxForm} from "redux-form";
import {Input, TextArea} from "../../common/FormControls/FormControls";
import style from "../../common/FormControls/FormControls.module.css";


const ProfileDataForm = props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            {!props.isOwner &&
            <div>
                <button>Сохранить</button>
            </div>
            }

            {
                props.error && <div className={style.formError}>{props.error}</div>
            }

            <div><b>Name :</b></div>
            <Field placeholder={'Name'} name={'fullName'} component={Input} />


            <div><b>Looking for a job:</b></div>
            <Field name={'lookingForAJob'} component={Input} type={'checkbox'}/>

            <div><b>My professional skills: </b></div>
            <Field placeholder={'My professional skills'} name={'lookingForAJobDescription'} component={TextArea}/>

            <div><b>About me:</b> </div>
            <Field placeholder={'About me'} name={'aboutMe'} component={TextArea} />
            <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => (
                <div key={key} className={s.contact}>
                    <b>{key}</b>: <Field placeholder={key} name={'contacts.' + key} component={Input} />
                </div>
            ))}
            </div>
        </form>
    )
}


const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)


export default ProfileDataReduxForm
