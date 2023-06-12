import { shape, bool, string, node } from "prop-types";
import { createContext, useContext, useState } from "react";

const initialUser = {};
const UserContext = createContext(initialUser);

const useUser = () => useContext(UserContext);

const Provider = ({ user, children }) => {
  const [currentUser] = useState(user);
  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
};

Provider.propTypes = {
  user: shape({
    isLoggedIn: bool,
    salesChannel: string,
  }),
  children: node,
};

export default {
  Provider: Provider,
  useUser,
};
