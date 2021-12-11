import axios from "axios";

const Api = axios.create({
    baseURL: "https://serratec-apirest-projfinal.herokuapp.com/projetofinal/"
});

export default Api;