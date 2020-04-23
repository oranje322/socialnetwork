import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import noAvatar from '../../../assets/images/unnamed.png'
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>

            <div className={s.descriptionBlock}>
                Name: {props.profile.fullName}
                <img src={props.profile.photos.large || noAvatar}/>
                <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;