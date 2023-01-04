import Post from '../components/Post'

const posts = [
    {
    id:'12',
    username:'random',
    userImg:'https://www.kindpng.com/picc/m/3-34478_cute-cat-gatito-tumblr-welcome-png-cute-welcome.png',
    img: 'https://www.kindpng.com/picc/m/3-34478_cute-cat-gatito-tumblr-welcome-png-cute-welcome.png',
    caption: "cos dziala"
},
{ 
    id:'123',
    username:'random',
    userImg:'https://www.kindpng.com/picc/m/3-34478_cute-cat-gatito-tumblr-welcome-png-cute-welcome.png',
    img: 'https://www.kindpng.com/picc/m/3-34478_cute-cat-gatito-tumblr-welcome-png-cute-welcome.png',
    caption: "cos dziala"
},
];

function Posts(){
    return(
        <div>
            {posts.map((post) => (
                <Post 
                key={post.id} id={post.id}
                username = {post.username}
                userImg = {post.userImg}
                img = {post.img}
                caption={post.caption}
                />
            ))}
          

        </div>
    )
}

export default Posts;