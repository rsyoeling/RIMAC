import  axios from "axios";
import { apiUrl } from "../config/config";

class PlansService{

    async listarPlans() {
        console.dir(apiUrl);
        const response = await axios.get(apiUrl + 'plans.json');
        return response.data;
    }
}

export default new PlansService();