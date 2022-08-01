import React from 'react';
import styles from './MainContainer.module.scss';





function MainContainer() {

    return (
        <div className={styles['container']}>
            <div className={styles['contents']}>
                <h1>메인 페이지</h1>
            </div>
        </div >
    )
}

export default React.memo(MainContainer)