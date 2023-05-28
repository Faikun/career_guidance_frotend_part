import axios from "axios";
const testsArr = {
    state: {
        tests: [
            {
                name: "Тест на профориентацию",
                image: require("@/images/Tests/Proforientation.jpg"),
                linkTo: "/prof/test",
                questions: [],
            },
            {
                name: "Ты гуманитарий или технарь?",
                image: require("@//images/Tests/humanist and technician.jpg"),
                linkTo: "",
                questions: [],
            },
            {
                name: "Какую IT профессию выбрать?",
                image: require("@//images/Tests/IT Profession.jpg"),
                linkTo: "",
                questions: [],
            },
            {
                name: "Можешь ли ты быть юристом?",
                image: require("@/images/Tests/CanUBeALawyer.jpg"),
                linkTo: "",
                questions: [],
            },
            {
                name: "Кем стать: фронтенд или бэкенд разработчиком?",
                image: require("@//images/Tests/BackOrFront.jpg"),
                linkTo: "/pageNotFound",
                questions: [],
            },
            {
                name: "Тест на профориентацию по школьным предметам",
                image: require("@//images/Tests/BySchoolSubjects.jpg"),
                linkTo: "",
                questions: [],
            }
        ]
    },
    getters: {
        getTests(state) {
            return state.tests
        }
    },
    mutations: {
        setQuestions(state, value) {
            state.tests[0].questions = value
        }
    },
    actions: {
        async initialQuestionList({commit}) {
            const questions = await axios.get("questions/getAll");
            commit("setQuestions", questions.data)
        }
    },
}

export default testsArr
