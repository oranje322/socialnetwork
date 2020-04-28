import React from 'react'
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validate/validate";
import {Input} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormControls/FormControls.module.css'


const LoginForm = props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} type={'password'} validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={'checkbox'} validate={[required]}/> remember me
            </div>
            <div>
                <button>Login</button>
                {
                    props.error && <div className={style.formError}>{props.error}</div>
                }
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        let {email, password, rememberMe} = formData;
        props.login(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)