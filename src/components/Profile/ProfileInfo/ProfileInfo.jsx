import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import noAvatar from '../../../assets/images/unnamed.png'
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import ProfileDataReduxForm from "./ProfileDataForm";




const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }
    const changePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const goToEditMode = () => {
        setEditMode(true)
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(()=> {
            setEditMode(false)
        })

    }




    return (
        <div>
            <div className={s.descriptionBlock}>
                <div><img src={props.profile.photos.large || noAvatar}/></div>
                <span>Загрузить фото:</span> {!props.isOwner && <input type="file" onChange={changePhoto}/>}
                {editMode ? <ProfileDataReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> : <ProfileData profile={props.profile}
                                                                                      isOwner={props.isOwner}
                                                                                      goToEditMode={goToEditMode}
                                                                                      status={props.status}
                                                                                      updateStatus={props.updateStatus} /> }


            </div>
        </div>
    )
}

const ProfileData = props => {
    return (
        <div>
            { !props.isOwner &&
                <div><button onClick={props.goToEditMode}>Изменить профиль</button></div>
            }
                <div><b>Name :</b> {props.profile.fullName}</div>
            <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
            <div><b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
            {props.profile.lookingForAJob &&
            <div><b>My professional skills: </b> {props.profile.lookingForAJobDescription ? 'yes' : 'no'}</div>
            }
            <div><b>About me:</b> {props.profile.aboutMe}</div>
            <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => <Contacts key={key} contactTitle={key}
                                                                                            contactValue={props.profile.contacts[key]}/>)}
            </div>
        </div>
    )
}



const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo;