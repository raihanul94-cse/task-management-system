import React from "react";
import { GlobalContext } from "../context/GlobalState";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

export default function Form() {
    const { edit } = React.useContext(GlobalContext);
    return edit ? <EditForm task={edit} /> : <AddForm />;
}
