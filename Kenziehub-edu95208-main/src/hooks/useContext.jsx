import { useContext } from "react";
import { UserContext } from "../providers/UserContext";
export function useContextIm() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
}