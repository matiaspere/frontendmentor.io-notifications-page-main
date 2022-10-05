import React from "react";
import { notifications } from "../utilities/notifications";

const useNotifications = () => {
  const [state, setState] = React.useState(notifications);

  const handleClick = (payload) => {
    let newState = [...state];

    newState.map((i) => {
      if (i.id == payload) {
        if (i.read == false) {
          i.read = true;
          setState(newState);
        } else {
          i.read = false;
          setState(newState);
        }
      }
    });
  };

  const handleClickAll = () => {
    let newState = [...state];
    newState.map((i) => {
      i.read = true;
      setState(newState);
    });
  };

  return {
    state,
    setState,
    handleClick,
    handleClickAll,
  };
};

export default useNotifications;

// let newState = [...state];
//     newState.forEach(i => {
//       if (i.id === payload) {
//         console.log("asd");
//         if (i.read === false) {
//           console.log("asd");
//           setState({
//             ...newState,
//             read: true,
//           });
//         } else {
//           console.log("asd");
//           setState({
//             ...newState,
//             read: false,
//           });
//         }
//       }
//     });
