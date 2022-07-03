import axios from "axios";
import { ApiUrlNames } from "@/services/api-service/api-url-names";

export const api = axios.create({
  baseURL: ApiUrlNames.MAIN_URL,
});
