import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import noAvatar from '../../../assets/images/unnamed.png'
import ProfileStatusWithHook from "./ProfileStatusWithHook";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
console.log(props.profile)
    const changePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                Name: {props.profile.fullName}
                <img src={props.profile.photos.large || noAvatar}/>
                <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
               Загрузить фото: {!props.isOwner && <input type="file" onChange={changePhoto}/> }
            </div>
        </div>
    )
}

export default ProfileInfo;