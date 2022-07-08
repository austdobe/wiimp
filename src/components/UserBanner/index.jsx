import { Wrapper, Avatar, Content, Headline, User } from "./UserBanner.styles"
import toonavatar from 'cartoon-avatar'

const UserBanner = () => {
    const avatar = toonavatar.generate_avatar({"gender" : "male", "id" : 65}) 
    console.log(avatar)
    const UserName = "Austin Dober"

    return (
        <Wrapper>
            <Avatar src={avatar}/>
            <Content>
                <Headline>Welcome Back!</Headline>
                <User>{UserName}</User>
            </Content>
        </Wrapper>
    )
}

export default UserBanner