import React from 'react';
import style from '../styles/Notification.module.css';

const Notification = (props) => {
  return (
    <div className={style.NotificationContainer}>
        <div className={style.NotificationContainerLeft}>
            <img src={props.image}/>
        </div>
        <div className={style.NotificationContainerRight}>
            <p className={style.TextName}>{props.name} <span className={style.TextAction}>{props.action}</span>  <span className={style.TextPost}>{props.post}</span><span className={style.TextGroup}>{props.group}</span></p> 
            <p className={style.TextTime}>{props.time}</p>
        </div>
    </div>
  )
}

export default Notification