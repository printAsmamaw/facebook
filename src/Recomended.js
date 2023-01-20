import React,{useState} from 'react'
import "./Recomended.css"
import Avatar from 'react-avatar';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReactPlayer from 'react-player'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Comment from './Comment';
function Recomended() {
   const [click,setClick]=useState(false);
        
    const handleClick=()=>{
        setClick(true);
    }
  return (
    <div className='eather'>
    <div className='recomended'>
        <h3>Recommended Post</h3>
        <div className='post__row'>
        <Avatar 
        src="https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=400"  googleId="118096717852922241760"
         size="100" round={true} />
         <h3>Grand M Official.</h3>
         <h4>Follow</h4>
         <div className='post__option'>
         <MoreVertRoundedIcon />
         </div>
         <div className='post__option'>
         <CloseRoundedIcon />
         </div>
        </div>
       
        <ReactPlayer height="70%" width="100%"  controls url="https://www.youtube.com/watch?v=oUFJJNQGwhk" />
          <div className='row'>
            <div className='row__1'>
            <div className='option__1'>
             <ThumbUpAltOutlinedIcon />
             </div>
             <div className='option__1'>
             <FavoriteBorderOutlinedIcon />
             </div>
             <h3>3.3K</h3>
             </div>
             <div className='row__3'>
             <p>67 Comments</p>
             <p>75 Shares</p>
             </div>
          </div>
     <div className='cross'></div>
          <div className='row__2'>
            <div className='row__between'>
            <div className='option__2'>
            <ThumbUpAltOutlinedIcon />
            </div>
            <p>Like</p>
            </div>

            <div className='row__between'>
            <div className='option__2' onClick={()=>handleClick()}>
            <ChatBubbleOutlineOutlinedIcon />
            </div>
            <p>Comment</p>
            </div>
           

            <div className='row__between'>
            <div className='option__2'>
            <ReplyOutlinedIcon />
            </div>
            <p>Share</p>
            </div>
          </div>
        </div>
        {click?<Comment />:null}
        </div>
  )
}

export default Recomended