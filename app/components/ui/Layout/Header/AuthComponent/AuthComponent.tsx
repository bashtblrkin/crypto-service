import React, {FC, useState} from 'react';
import styles from "./AuthComponent.module.scss";
import DropDownWrapper from "@/ui/Layout/Header/DropDownWrapper/DropDownWrapper";
import LoginForm from "@/ui/Layout/Header/AuthComponent/LoginForm/LoginForm";
import RegisterForm from "@/ui/Layout/Header/AuthComponent/RegisterForm/RegisterForm";

const AuthComponent: FC = () => {
    const [type, setType] = useState<'login' | 'register'>('login')

    const handleChangeType = (type: 'login' | 'register') => {
        setType(type)
    }

    return (
        <DropDownWrapper
            clickableElement={(toggleShow) => (
                <button onClick={toggleShow} className={styles.buttonSignIn}>
                    <p>Вход</p>
                </button>
            )}
        >
            {
                type === 'login' ? (
                    <LoginForm onChangeTypeForm={handleChangeType}/>
                ) : (
                    <RegisterForm onChangeTypeForm={handleChangeType}/>
                )
            }
        </DropDownWrapper>
    );
};

export default AuthComponent;