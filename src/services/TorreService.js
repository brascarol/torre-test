import { bioAxios, jobAxios, searchAxios } from "./http-common";

class TorreService {

    getBio(username) {
        return bioAxios.get("/${username}", username);

    }

    getJob(id) {
        return jobAxios.get("/${id}", id);

    }

    postOpportunities(data) {
        return searchAxios.post("/opportunities/_search/", data);

    }

    postPeople(data) {
        return searchAxios.post("/people/_search?", data).then(res => res.data.results);

    }

}

export default new TorreService();