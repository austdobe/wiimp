import { Wrapper, Content } from "./List.styles"
import ListItem from "../ListItem"


const List = () => {

    return (
        <Wrapper>
            <Content>
                <ListItem title="Current Pantry" nav="user/pantryList" />
                <ListItem title="Add to Pantry" nav="user/shopping"/>
                <ListItem title="Shopping List" />
            </Content>
        </Wrapper>         
    )
}

export default List