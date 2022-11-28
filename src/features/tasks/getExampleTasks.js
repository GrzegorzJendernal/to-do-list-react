import axios from "axios";

export const getExampleTask = async () => {
    try {
        const response = await axios.get("/to-do-list-react/exampleTasks.json");
        return response.data;
    } catch (error) {
        return [{ content: "przykładowe zadanie", done: false, id: "abcd" }];
    }
};