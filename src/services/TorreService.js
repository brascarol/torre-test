import { bioAxios, jobAxios, searchAxios } from "./http-common";

class TorreService {

    getBio(username) {
        return bioAxios.get("/" + username).then(res => res.data);

    }

    getJob(id) {
        return jobAxios.get("/" + id).then(res => res.data);

    }

    postOpportunities(data) {
        return searchAxios.post("/opportunities/_search?", data).then(res => res.data);

    }

    postPeople(data) {
        return searchAxios.post("/people/_search?", data).then(res => res.data.results);

    }

}

export default new TorreService();