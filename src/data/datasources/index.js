import ENV from "../../../envrionment.";
import axios from "axios";

export const HttpClient = axios.create({ baseURL: ENV.baseUrl });

 