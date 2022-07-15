import { RouterLink, Wrapper } from "./ListItem.styles"

const ListItem = (props) => {

    return (
        <Wrapper>
            <RouterLink to={`/${props.nav}`}>
                {props.title}
            </RouterLink>
        </Wrapper>
    )
}

export default ListItem