import React, {useState} from 'react';
import style from './form.module.scss';
import ChangeBtn from "../buttons/changeBtn/ChangeBtn";
import Block from "../block/Block";

const Form = () => {
    const [warningTextPassword, setWarningTextPassword] = useState('');
    const [warningTextPasswordRepeat, setWarningTextPasswordRepeat] = useState('');
    const [warningTextEmail, setWarningTextEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const form: any = e.target;
        const city = {city: form.city.value};
        const university = {university: form.university.value};
        const password = {password: form.password.value};
        const passwordRepeat = {passwordRepeat: form.passwordRepeat.value};
        const email = {email: form.email.value};

        if (password.password === passwordRepeat.passwordRepeat) {
            setWarningTextPasswordRepeat('');
        } else {
            setWarningTextPasswordRepeat('Пароли не совпадают');
        }

        if (!password.password) setWarningTextPassword('Укажите пароль')
        if (!passwordRepeat.passwordRepeat) setWarningTextPasswordRepeat('Укажите пароль')
        if (!email.email) setWarningTextEmail('Укажите E-mail')

        let person = [city, university, password, passwordRepeat, email];
        console.log(JSON.stringify(person))

        form.password.value = '';
        form.passwordRepeat.value = '';
        form.email.value = '';
    };

    return (
        <form className={style.form} onSubmit={handleSubmit} >
            <Block title={'Ваш город'} select={true} type='text' state='city' name='city' />
            <Block title={'Ваш университет'} select={true} type='text' state='university' name='university' />
            <Block title={'Пароль'} select={false} type='password' text={'Ваш новый пароль должен содержать не менее 5 символов'} minLength={5} name='password' warningText={warningTextPassword} required={true} />
            <Block title={'Пароль ещё раз'} select={false} type='password' text={'Повторитепароль, пожалуйста, это обезопасит вас с ним на случай ошибки'} minLength={5} name='passwordRepeat' warningText={warningTextPasswordRepeat} required={true} />
            <Block title={'Электронная почта'} select={false} type='email' text={'Можно изменить адрес, указанный при регистрации'} name='email' warningText={warningTextEmail} required={true} />
            <Block title={'Я согласен'} select={false} type='checkbox' text={'принимать актуальную информацию на сайте'} />
            <ChangeBtn name='Изменить' />
        </form>
    );
};

export default Form;