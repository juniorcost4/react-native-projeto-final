import axios from "axios";

const Api = axios.create({
    baseURL:"http://10.0.0.115:8080/projetofinal"
});

export default Api;