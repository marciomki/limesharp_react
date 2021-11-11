import React from 'react';
import Modal from './Modal';
import styles from '../styles/Home.module.scss'

import TaskSection1 from '../tasks/TaskSection1'
import TaskSection2 from '../tasks/TaskSection2'

const tasks = {
    task1: TaskSection1,
    task2: TaskSection2,
}

const Menu = () => {
    const [exercise, setExercise] = React.useState('');
    const Gettask = tasks[exercise];

    return (
        <div className={['row col-md-4 col-12']}>
            <div id="menu" className={styles.menu}>
            <button className={styles.button} onClick={() => { setExercise('task1') }} >Task 1</button>
            <button className={styles.button} onClick={() => { setExercise('task2') }} >Task 2</button>
            </div>
            <Modal showModal={Boolean(Gettask)}>
                <Gettask />
            </Modal>
        </div>
    )
}
export default Menu;