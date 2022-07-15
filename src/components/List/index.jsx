import { Wrapper } from "./List.styles"
import ListItem from "../ListItem"


const List = () => {

    return (
        <Wrapper>
            <ListItem title="Current Pantry" nav="user/pantryList" />
            <ListItem title="Add to Pantry" nav="user/shopping"/>
            <ListItem title="Shopping List" />
        </Wrapper>         
    )
}

export default List