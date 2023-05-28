import axios from "axios";

const Universities = {
    state: {
        university: [],
    },
    getters: {
        getUniversity(state) {
            return state.university
        }
    },
    mutations: {
        setAllUniversities(state, value) {
            state.university = value
        }
    },
    actions: {
        async setAllUniversities({commit}) {
            const universities = await axios.get("universities");
            commit("setAllUniversities", universities.data)
            return universities.data
        }
    }
}

export default Universities
