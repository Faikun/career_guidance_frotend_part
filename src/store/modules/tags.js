import axios from "axios";

const Tags = {
    state: {
        tags: [],
    },
    getters: {
        getTags(state) {
            return state.tags
        }
    },
    mutations: {
        setAllTags(state, value) {
            state.tags = value
        }
    },
    actions: {
        async setAllTags({commit}) {
            const tags = await axios.get("tags");
            commit("setAllTags", tags.data)
            return tags.data
        }
    }
}

export default Tags
