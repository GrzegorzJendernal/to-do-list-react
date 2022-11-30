import axios from "axios";

export const getExampleTask = async () => {
    const response = await axios.get("/to-do-list-react/exampleTasks.json");
    return response.data;
};