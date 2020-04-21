import React from 'react'
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validate/validate";
import {Input} from "../common/FormControls/FormControls";



const LoginForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={'checkbox'} validate={[required]}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
     
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = formData => {
        console.log(formData)
    }
    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

export default Login