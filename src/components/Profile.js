import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Messages } from './Messages';

export const Profile = ({userLoggedIn, users, setUsers, messages, sendMessage }) => {

    const params = useParams();
    const user = params.username ? users.find(x => x.username === params.username) : userLoggedIn
    //console.log(params)

    // if (params.username){
    //     console.log(true)
    //     user = users.find(x => x.username === user.username)
    // }

    const imageRef = useRef();
    const [image, setImage] = useState(user.image)

    const [imageError, setImageError] = useState();

    function isImageValid(){
        setImageError();
        let noErrors = true;

        imageRef.current.style.borderColor = null;
        imageRef.current.style.backgroundColor = null;

        if (!imageRef.current.value.includes('http')) {
            setImageError((current) => '"http" is missing on image url');
            imageRef.current.style.borderColor = "red";
            imageRef.current.style.backgroundColor = "rgb(231, 185, 185, 0.2)";
            noErrors = false;
        }
        return noErrors;
    }

    function changePicture(){
        if (!isImageValid()) return;
        user.image = imageRef.current.value;
        //console.log(user.image)
        setImage(imageRef.current.value)
        setUsers(current => [...current.filter(x=>x.username !== user.username), user]);
        //console.log(users)
    }

  return (
    <div className='profile'>
    {user && <div className="image-wrapper">
        <img src={image} alt="" />
        {userLoggedIn.username === user.username && <div className="changingPhoto" >
            <input type="text" ref={imageRef} placeholder='input URL here' />
            <button onClick={changePicture}>Change photo</button>
        </div>}
    </div>}
    {user && 
        <div className="information">
            <div className="username">Username: {user?.username}</div>
            <div className="username">Email: {user?.email}</div>
        </div>
    }
    {userLoggedIn.username !== user.username && <Messages userLoggedIn={userLoggedIn} user={user} messages={messages} sendMessage={sendMessage}/>}
</div>
  )
}
