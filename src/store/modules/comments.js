import axios from "axios";

const comments = {
    state: {
        comments: [
            /*{
                user: "username",
                date: "01-04-2023",
                stars: "4",
                comment: "Хороший тест!",
                usersIdLikes: [1, 2],
                usersIdDislikes: [3],
                liked: false,
                disliked: false,
                openedInput: false,
                inputValue: "",
                answered: [{
                    user: "username",
                    date: "02-04-2023",
                    comment: "Ответ на Хороший тест!",
                    usersIdLikes: [1, 2],
                    usersIdDislikes: [],
                    liked: false,
                    disliked: false,
                    answered: []
                }]
            },
            {
                user: "some user",
                date: "12-03-2023",
                stars: "5",
                comment: "Отличный тест!",
                usersIdLikes: [1, 2],
                usersIdDislikes: [],
                liked: false,
                disliked: false,
                openedInput: false,
                inputValue: "",
                answered: []
            }*/
        ]
    },
    getters: {
        getComments(state) {
            return state.comments
        }
    },
    mutations: {
        setComments(state, value) {
            state.comments = value
        }
    },
    actions: {
        async initialCommentsList({commit}) {
            const url = 'https://proffesion-choose-default-rtdb.firebaseio.com/comments.json'
            const comments = await fetch(url).then(res => res.json())
            // console.log(Object.values(comments))
            commit("setComments", comments)

        }
    },
}

export default comments
