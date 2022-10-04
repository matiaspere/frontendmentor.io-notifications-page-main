import "./App.css";
// Component and data
import Notification from "./components/Notification";
import { notifications } from "./utilities/notifications";
// Context
import AppContext from "./context/AppContext";
import useNotifications from "./hooks/useNotifications";

function App() {
  const notificationsUse = useNotifications();
  return (
    <AppContext.Provider value={notificationsUse}>
      <div className="App">
        <div className="Container">
          <div className="Container-header-text">
            <div className="Container-header-text-left">
              <h1>Notifications</h1>
              <div>3</div>
            </div>
            <p>Mark all as read</p>
          </div>
          <div className="Notifications-container">
            {notifications.map((i) => (
              <Notification
                image={i.image}
                name={i.name}
                action={i.action}
                post={i.post}
                group={i.group}
                time={i.time}
              />
            ))}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
