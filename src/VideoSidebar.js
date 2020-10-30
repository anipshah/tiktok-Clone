import React, { useState} from 'react'
import './videoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar({likes, shares, messages}) {
    const [like, setlike] = useState(false)

    return (
        <div className="videoSidebar">
            <div className="VideoSidebar_button">
                {like ? (<FavoriteIcon fontSize="large" onClick={e => setlike(false)} />) : (<FavoriteBorderIcon fontSize="large" onClick={e=>setlike(true)}/>)}
                
                <p>{like ?  likes  + 1 : likes}</p>
            </div>
            <div className="VideoSidebar_button">
                <MessageIcon fontSize="large"/>
                <p>{messages}</p>
            </div>
            <div className="VideoSidebar_button">  
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
            
        </div>
    )
}

export default VideoSidebar
