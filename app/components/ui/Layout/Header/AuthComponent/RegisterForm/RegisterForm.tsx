import React, {FC} from 'react';
import {AuthorizeForm} from "@/shared/interfaces/form.interface";

import styles from "./RegisterForm.module.scss";
import {SubmitHandler, useForm} from "react-hook-form";
import {RegisterField} from "@/ui/Layout/Header/AuthComponent/RegisterForm/registerForm.interface";
import {useAuth} from "@/hooks/useAuth";
import {useMutation} from "react-query";
import {AuthService} from "@/services/auth/auth.service";
import Field from "@/ui/Field/Field";
import {validEmail} from "@/ui/Layout/Header/AuthComponent/LoginForm/loginForm.constants";

const RegisterForm: FC<AuthorizeForm> = ({onChangeTypeForm}) => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<RegisterField>({
        mode: 'onChange'
    })

    const { setUser } = useAuth()

    const {mutate: registerSync} = useMutation(
        ['register'],
        (data: RegisterField) => AuthService.register(data.name, data.email, data.password),
        {
            onSuccess(data) {
                setUser(data.user)
                reset()
            }
        }
    )

    const onSubmit: SubmitHandler<RegisterField> = (data) => {
        registerSync(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Field
                {...register('name', {
                    required: 'Поле является обязательным'
                })}
                placeholder="Имя"
                className={styles.input}
                error={errors.name}
            />
            <Field
                {...register('email', {
                    required: 'Поле является обязательным',
                    pattern: {
                        value: validEmail,
                        message: 'Введён некорректный email'
                    }
                })}
                placeholder="Email"
                className={styles.input}
                error={errors.email}
            />
            <Field
                {...register('password', {
                    required: 'Поле является обязательным',
                    minLength: {
                        value: 6,
                        message: 'Минимальная длина пароля 6 символов'
                    }
                })}
                placeholder="Пароль"
                type="password"
                className={styles.input}
                error={errors.password}
            />
            <button className={styles.buttonSignIn}>Зарегистрироваться</button>
            <p className={styles.grayLink} onClick={() => {onChangeTypeForm('login')}}>Войти</p>
        </form>
    );
};

export default RegisterForm;