import React from 'react'
import "./Comment.css"
import Avatar from 'react-avatar';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
function Comment() {
  return (
    <div className='comm'>
        <div className='personal'>
        <Avatar 
        src="https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=400"  googleId="118096717852922241760"
         size="100" round={true} />
         <div className='write__comment'>
            <input type="text" />
         </div>
         
         <div className='icon_option'>
           <LocalSeeOutlinedIcon  />
           </div>
           <div className='icon_option'>
           <EmojiEmotionsOutlinedIcon />
           </div>
           <div className='icon_option'>
           <GifBoxOutlinedIcon />
              </div>
     
         </div>

         <div className='user__comment'>
            <div className='user__account'>
         <Avatar 
         src="https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=400"
         size="100" round={true} />
         <h3>Kasahun Yibeltal</h3>
         </div>
         <p>I love cr7.They are
          fighting him because I storngly belive</p>
         </div>

         <div className='user__comment'>
            <div className='user__account'>
         <Avatar 
         src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600"
         size="100" round={true} />
         <h3>Selamken Yihun</h3>
         </div>
         <p>I love cr7.They are
          fighting him because I storngly belive</p>
         </div>

         <div className='user__comment'>
            <div className='user__account'>
         <Avatar 
         src="https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=600"
         size="100" round={true} />
         <h3>Bereket Muluken</h3>
         </div>
         <p>I love cr7.They are
          fighting him because I storngly belive</p>
         </div>
         <div className='user__comment'>
            <div className='user__account'>
         <Avatar 
         src="https://images.pexels.com/photos/843563/pexels-photo-843563.jpeg?auto=compress&cs=tinysrgb&w=400"
         size="100" round={true} />
         <h3>Debre szihone</h3>
         </div>
         <p>I love cr7.They are
          fighting him because I storngly belive</p>
         </div>

        
        </div>
  )
}

export default Comment