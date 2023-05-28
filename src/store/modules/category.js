const category = {
    state: {
        category: {
            name: {
                IT: "Information Technology",
                Medicine: "Medicine",
                Economy: "Economy",
                Management: "Management",
                Art: "Art",
                Science: "Science",
                Marketing: "Marketing",
                Finance: "Finance",
                Jour: "Jour",
                Law: "Law",
                Education: "Education",
                Design: "Design",
                Trade: "Trade",
                Logistics: "Logistics",
                Natural: "Natural",
                Technology: 'Technology',
                Architecture: 'Architecture'
            },
            img: {
                IT: require("../../images/Prof/IT.avif"),
                Medicine: require("../../images/Prof/Medicine.avif"),
                Economy: require("../../images/Prof/Economy.avif"),
                Management: require("../../images/Prof/Management.avif"),
                Art: require("../../images/Prof/Art.avif"),
                Science: require("../../images/Prof/Science.avif"),
                Marketing: require("../../images/Prof/Marketing.avif"),
                Finance: require("../../images/Prof/Finance.avif"),
                Jour: require("../../images/Prof/Jour.avif"),
                Law: require("../../images/Prof/Law.avif"),
                Education: require("../../images/Prof/Education.avif"),
                Design: require("../../images/Prof/Design.avif"),
                Trade: require("../../images/Prof/Trade.avif"),
                Logistics: require("../../images/Prof/Logistics.avif"),
                Natural: require("../../images/Prof/Natural.jpg"),
                Technology: require("../../images/Prof/Technology.webp"),
                Architecture: require("../../images/Prof/Architecture.jpg")
            },
        },
    },
    getters: {
        getProfCategory(state) {
            return state.category
        }
    }
}

export default category
