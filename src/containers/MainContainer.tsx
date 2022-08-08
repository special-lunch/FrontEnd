
import React from 'react';
import TextInput from '../components/Input/TextInput';
import styles from './MainContainer.module.scss';
import Button from '../components/button/Button';


function MainContainer() {

    return (
        <div className={styles['container']}>
            <div className={styles['contents']}>
                <TextInput text="이메일" type="email" />
                <TextInput text="비밀번호" type="password" />
                <Button text="로그인"/>
                <Button text="회원가입"/>


            </div>
        </div >
    )
}

export default React.memo(MainContainer)