import React, { Component } from 'react';
import s from './Auth.scss';

import Button from '../../components/Ui/Button/Button';
import Input from '../../components/Ui/Input/Input';

class Auth extends Component {
    state = {  }

    loginHandler() {

    }

    registerHandler() {

    }

    submitHandler(e) {
        e.preventDefault();
    }

    render() { 
        return ( 
            <div className={s.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={s.AuthForm}>
                        <Input 
                            label='Emain'
                        />
                        <Input 
                            label='Пароль'
                            errorMessage='Тест'
                        />

                        <Button 
                            type='success' 
                            onClick={this.loginHandler}
                        >
                            Войти
                        </Button>

                        <Button 
                            type='primary' 
                            onClick={this.registerHandler}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Auth;