import {
    BookmarkIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    EllipsisHorizontalIcon,
    FaceSmileIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

import {HeartIcon as HeartIconFilled} from '@heroicons/react/24/solid'

function Post({id, username, userImg, img, caption}){
    return(
        <div className="bg-white my-7 border rounded-sm">
            <div className="flex items-center p-5">
                <img src={userImg} className= "rounded-full h-12 w-12 object-contain border p-1 mr-3 " alt=""/>
                <p className="flex-1 font-bold ">{username}</p>
                <EllipsisHorizontalIcon className="h-5"/>
            </div>

            <img src={img} className="object-cover w-full" alt=""/>


            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <HeartIcon className="btn"/>
                    <ChatBubbleOvalLeftEllipsisIcon className="btn"/>
                    <PaperAirplaneIcon className="btn -rotate-45"/>

                </div>

                <BookmarkIcon className="btn"/>
            </div>

            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username} </span>
                {caption}
            </p>
            



            <form className="flex items-center p-4">
                <FaceSmileIcon className="btn"/>
                <input 
                placeholder="Add a comment..."
                type="text" 
                className="border-none flex-1 focus:fing-0 outline-none"/>
                <button className="font-semibold text-blue-400">Post</button>

            </form>

        </div>
    )
}

export default Post