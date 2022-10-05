import React from "react";
import "./App.css";
// Component and data
import Notification from "./components/Notification";
import { notifications } from "./utilities/notifications";
// Context
import AppContext from "./context/AppContext";
import useNotifications from "./hooks/useNotifications";

function App() {
  const notificationsUse = useNotifications();
  const { handleClick, state, handleClickAll } = notificationsUse;

  let counter = 0;
  let newState = [...state];
  newState.map((i) => {
    if (i.read == false) {
      counter = counter + 1;
    }
  });

  return (
    <AppContext.Provider value={notificationsUse}>
      <div className="App">
        <div className="Container">
          <div className="Container-header-text">
            <div className="Container-header-text-left">
              <h1>Notifications</h1>
              <div>{counter}</div>
            </div>
            <p className="allRead" onClick={handleClickAll}>Mark all as read</p>
          </div>
          <div className="Notifications-container">
            {Array.isArray(state) ? (
              state.map((i) => (
                <Notification
                  image={i.image}
                  name={i.name}
                  action={i.action}
                  post={i.post}
                  group={i.group}
                  time={i.time}
                  read={i.read}
                  key={i.id}
                  identif={i.id}
                  message={i.message}
                />
              ))
            ) : (
              <p>no</p>
            )}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
