import axios from "axios";

const Tags = {
    state: {
        subjects: [],
    },
    getters: {
        getSubjects(state) {
            return state.subjects
        }
    },
    mutations: {
        setAllSubjects(state, value) {
            state.subjects = value
        }
    },
    actions: {
        async setAllSubjects({commit}) {
            const subjects = await axios.get("subjects");
            commit("setAllSubjects", subjects.data)
            return subjects.data
        }
    }
}

export default Tags
