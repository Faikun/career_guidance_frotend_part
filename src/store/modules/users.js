import axios from "axios";

const users = {
    state: {
        users: [
            /*{
                id: 2,
                username: "guest",
                email: "guest@gmail.com",
                password: "guestPass",
                role: "user",
                "location": "Нур-Султан",
                history: []
            },*/
        ],
    },
    getters: {
        getUsers(state) {
            return state.users
        }
    },
    mutations: {
        removeUser(state, index) {
            state.users.splice(index, 1);
        },
        setAllUsers(state, value) {
            state.users = value
        }
    },
    actions: {
        async setAllUsers({commit}) {
            const users = await axios.get("user/all");
            commit("setAllUsers", users.data)
            return users.data
        }
    }
}

export default users
