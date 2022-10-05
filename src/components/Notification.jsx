import React from "react";
import style from "../styles/Notification.module.css";
import AppContext from "../context/AppContext";

const Notification = (props) => {
  const { state, handleClick } = React.useContext(AppContext);

  const { identif } = props;

  return (
    <div className={style.Main}>
      <div className={style.MainContainer}>
        <div
          className={
            !props.read
              ? style.NotificationContainer
              : style.NotificationContainerRead
          }
          onClick={() => handleClick(identif)}
        >
          <div className={style.NotificationContainerLeft}>
            <img src={props.image} />
          </div>
          <div className={style.NotificationContainerRight}>
            <div className={style.textReaded}>
              <p className={style.TextName}>
                {props.name}
                <span className={style.TextAction}>{props.action}</span>
                <span className={style.TextPost}>{props.post}</span>
                <span className={style.TextGroup}>{props.group}</span>
              </p>
              {!props.read && <div className={style.redCircle}></div>}
            </div>
            <p className={style.TextTime}>{props.time}</p>
          </div>
        </div>
      </div>
      <div className={style.MainMessage}>
        {props.message && <div className={style.message}><p>{props.message}</p></div>}
      </div>
    </div>
    
  );
};

export default Notification;
