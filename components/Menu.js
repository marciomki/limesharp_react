import React from 'react';
import Modal from './Modal';
import styles from '../styles/Home.module.scss'

import TaskSection1 from '../tasks/TaskSection1'
import TaskSection2 from '../tasks/TaskSection2'
import TaskSection3 from '../tasks/TaskSection3'

const tasks = {
    task1: TaskSection1,
    task2: TaskSection2,
    task3: TaskSection3,
}

const Menu = () => {
    const [exercise, setExercise] = React.useState('');
    const Gettask = tasks[exercise];

    return (
        <div>
            <div id="menu">
            <button onClick={() => { setExercise('task1') }} >Task 1</button>
            <button onClick={() => { setExercise('task2') }} >Task 2</button>
            <button onClick={() => { setExercise('task3') }} >Task 3</button>
            </div>
            <Modal showModal={Boolean(Gettask)}>
                <Gettask />
            </Modal>
        </div>
    )
}
export default Menu;