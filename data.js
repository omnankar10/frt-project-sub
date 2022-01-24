var defaultThreads = [{
        id: 1,
        title: "Forum",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [{
                author: "XYZ",
                date: Date.now(),
                content: "Hey, I wanted to know about 3rd dose vaccine procedure."
            },
            {
                author: "ABC",
                date: Date.now(),
                content: "Hey to you too, kindly visit www.cowin.gov.in"
            }
        ]
    },
    {
        id: 2,
        title: "Forum 2",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [{
                author: "PQR",
                date: Date.now(),
                content: "Hello, I wanted to know about the omicron symptoms?"
            },
            {
                author: "LMN",
                date: Date.now(),
                content: "Actually, most of the symptoms are just body pain and fever over cold and cough. Be safe."
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
