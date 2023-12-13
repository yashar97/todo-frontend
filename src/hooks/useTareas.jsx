import { useContext } from "react";
import TareaContext from "../context/TareaContext";

const useTareas = () => {
    return useContext(TareaContext);
}

export default useTareas