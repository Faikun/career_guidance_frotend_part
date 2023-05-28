import {ref} from "vue";

const notification = {
    state: {
        notification: ref({
            title: "",
            text: "",
            mode: "",
            openedNotification: false
        })
    },
    getters: {
        getNotificationInfo(state) {
            return state.notification
        }
    },
    mutations: {
        setNotificationBool(state) {
            state.notification.openedNotification = false;
        },
        setNotificationInfo(state, payload) {
            state.notification.title = payload.titleValue;
            state.notification.text = payload.text;
            state.notification.mode = payload.mode;
            state.notification.openedNotification = true;
        }
    }
}

export default notification
