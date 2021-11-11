import React from "react";
import {useSpring, animated} from 'react-spring'
import styles from '../styles/Home.module.scss'

const Modal = ({showModal, children}) => {
    const animation = useSpring ({
      config: {
        duration: 250
      },
      opacity: showModal ?  1 : 0
    })
    return <>{
        showModal ? 
            <animated.div style={animation}>
            <div className={styles.modal} >
                {children}
            </div>
        </animated.div>
        : null
        }
    </>
  }
  export default Modal;