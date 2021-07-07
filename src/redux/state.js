

let state ={
    profilePage:{
        posts: [
            {id: 1, message: 'Hi, How are you?', likesCount: 12},
            {id: 2, message: 'Hello, How are you?', likesCount: 13},
            {id: 3, message: 'How are you? How are you?', likesCount: 1}
        ]
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
        ]
    }
}

export default state;