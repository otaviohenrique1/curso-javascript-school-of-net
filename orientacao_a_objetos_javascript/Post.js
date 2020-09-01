class Post {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static comparePosts(item1, item2) {
        return item1.date - item2.date;
    }
}

const posts = [
    new Post('Title 1', new Date(2018, 8, 4)),
    new Post('Title 2', new Date(2018, 9, 4)),
    new Post('Title 3', new Date(2018, 4, 6)),
    new Post('Title 4', new Date(2018, 4, 20)),
    new Post('Title 5', new Date(2018, 4, 1)),
];

let a = posts.sort(Post.comparePosts);
console.log(a);
