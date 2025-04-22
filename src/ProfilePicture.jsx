// click events

function ProfilePicture() {
    const imageUrl = './src/assets/girl.jpeg';
    const handleClick = (e) => e.target.style.display = 'none'
    return(
        <img  className="profile-picture" onClick={(e) => handleClick(e)} src={imageUrl}></img>
    )

}

export default ProfilePicture