import Post from '../components/Post'
import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { Snapshot } from 'recoil';

// const posts = [
//     {
//     id:'12',
//     username:'random',
//     userImg:'https://www.kindpng.com/picc/m/3-34478_cute-cat-gatito-tumblr-welcome-png-cute-welcome.png',
//     img: 'https://www.kindpng.com/picc/m/3-34478_cute-cat-gatito-tumblr-welcome-png-cute-welcome.png',
//     caption: "cos dziala"
// },
// { 
//     id:'123',
//     username:'random',
//     userImg:'https://www.kindpng.com/picc/m/3-34478_cute-cat-gatito-tumblr-welcome-png-cute-welcome.png',
//     img: 'https://www.kindpng.com/picc/m/3-34478_cute-cat-gatito-tumblr-welcome-png-cute-welcome.png',
//     caption: "cos dziala"
// },
// ];

function Posts(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const unSubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot =>{
            setPosts(snapshot.docs);
        })

        return () => {

            unSubscribe();
        }

    }, [db])

    return(
        <div>
            {posts.map((post) => (
                <Post 
                key={post.id} 
                id={post.id}
                username = {post.data().username}
                userImg = {post.data().profileImg}
                img = {post.data().image}
                caption={post.data().caption}
                />
            ))}
          

        </div>
    )
}

export default Posts;