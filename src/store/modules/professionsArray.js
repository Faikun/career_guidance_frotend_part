const professionsArray = {
    state: {
        professionsArray: []
    },
    getters: {
        getProfessionsArray(state) {
            return state.professionsArray
        }
    },
    actions: {
        async initialProfessionsList({commit}) {
            const url = 'https://proffesion-choose-default-rtdb.firebaseio.com/professionsArray.json'
            const comments = await fetch(url).then(res => res.json())
            commit("setAllProfessions", comments)
        }
    },
    mutations: {
        setAllProfessions(state, value) {
            state.professionsArray = value
        },
        async addProf(state, data) {
            await fetch('https://proffesion-choose-default-rtdb.firebaseio.com/professionsArray.json', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            state.professionsArray.push(data)
        }
    }
}

export default professionsArray
