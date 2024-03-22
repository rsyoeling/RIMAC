import  axios from "axios";
import { apiUrl } from "../config/config";

class UserService{

    async listarUser() {
        const response = await axios.get(apiUrl + 'user.json');
        return response.data;
    }
}

export default new UserService();