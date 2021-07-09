import {rerenderEntireTree} from "../render";



let state ={
    profilePage:{
        posts: [
            {id: 1, message: 'Hi, How are you?', likesCount: 12},
            {id: 2, message: 'Hello, How are you?', likesCount: 13},
            {id: 3, message: 'How are you? How are you?', likesCount: 1}
        ],
        newPostText: 'just text'
    },
    messagesPage:{
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'How are you?'}

        ],
        dialogs: [
            {id: 1, name: 'Anton'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Valera'},
            {id: 4, name: 'Vika'},
            {id: 5, name: 'Boris'}
        ],
        newMessageText: 'Just message' // 3. В state.js в разделе messagesPage создаем обьект для хранения нового сообщения
    }
}

window.state = state;

export let addPost = (postMessage) => {
    let newPost ={
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => { // 4. Создаем функцию для обновления текста на новый и перерисовки сайта и експортируем ее в render.js . Функция принимает текст из поля ввода.
    state.messagesPage.newMessageText=newText;
    rerenderEntireTree(state);
}

export default state;