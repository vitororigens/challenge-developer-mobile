import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { PublicRoutes } from "./publicRoutes";
import { PrivateRoutes } from "./privateRoutes";

export function Routes() {
  const { user } = useContext(AuthContext);

  return user ? <PrivateRoutes /> : <PublicRoutes />;
}
