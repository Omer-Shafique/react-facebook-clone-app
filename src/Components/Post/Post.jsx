import "./Post.css"
import { MoreVert } from "@mui/icons-material"
import {Users} from  '../../DummyData'
import { useState } from "react";





// console.log(user[0].username)
export default function Post({post}) {
    const user = Users.filter (u=> u.id===1 )
    const [like , setLike] = useState (post.like)
    const [isLiked , setIsLiked] = useState (false)
    
    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    console.log(post)
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft"  ></div>
                <img className="postProfileImage" src={`/assets/profile pictures${Users.filter((u) => u.id === post.userId)[0].profilePicture}`} alt="profileImage" />
                <span className="postUserName" >{Users.filter((u) => u.id === post.userId)[0].username}</span>
                
                <span className="postTime">{post.date}</span>
                <div className="postTopRight"></div>
                <MoreVert className="MoreVert"  />
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={`/assets/Posts/${post.photo}`} alt="" className="postImage" />

            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="\assets\like.png" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="\assets\heart.png" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="\assets\careemoji.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like}</span>


                </div>
                <div className="postBottomRight">
                    <span className="commentText">{post.comment} Comments</span>
                    <span>   ,   </span>
                    <span className="commentText">{post.comment} Share</span>
                </div>
                 </div>
            </div>
            </div>
  )
}
