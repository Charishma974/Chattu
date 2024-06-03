export const sampleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
        groupChat: false,
        members: ["1", "2"]
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Boi",
        _id: "2",
        groupChat: false,
        members: ["1", "2"]
    }
]

export const sampleUsers = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Boi",
        _id: "2",
    }
]

export const sampleNotifications = [
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Doe",
        },
        _id: "1",
    },
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Boi",
        },
        _id: "2",
    }
]

export const sampleMessage = [
    {
        attachments: [],
        content: "L*uda ka Message hai",
        _id: "sfnsdjkfsdnfkjsbnd",
        sender: {
            _id: "user._id",
            name: "Chaman",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630Z",
    },
    {
        attachments: [
            {
                public_id: "asdsad 2",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "",
        _id: "sfnsdjkfsdnfkjsbndcherry",
        sender: {
            _id: "sdfsdfsdf",
            name: "Chaman 2",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630Z",
    },
]

export const dashboardData = {
    users: [
        {
            name: "John Doe",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "1",
            username: "john_doe",
            friends: 20,
            groups: 5,
        },
        {
            name: "John Boi",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "2",
            username: "john_boi",
            friends: 20,
            groups: 25,
        }
    ],
}