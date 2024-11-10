import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6730e4857aaf2a9aff0f3fdb.mockapi.io/";

export const fetchContacts = createAsyncThunk(
"contacts/fetchAll",
async (_, thunkApi) => {
            // dispatch({ type: "contacts/fetchAll/pending" })
    try {
        const response = await axios.get("/contacts");
        return response.data;
            // dispatch({ type: "contacts/fetchAll/fulfilled", payload: response.data })
    } catch (error) {
            // return error.message;
            // dispatch({ type: "contacts/fetchAll/rejected", payload: error.message })
        return thunkApi.rejectWithValue(error.message);
    }
}
);
