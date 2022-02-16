import React from 'react'
import cl from "./MyModal.module.css"

const MyModal = ({children, visible, setVisible}) => {
    const classes = [cl.MyModal]
    if (visible) {
        classes.push(cl.modalActive)
    }


    return (
        <div onClick={(event) => {setVisible(false)}
            } className={classes.join(" ") }>
            <div className={cl.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>

    )


}


export default MyModal