import { Wrapper, RouterLink } from './Navbar.styles';

const Navbar = () => {

    return (
        <Wrapper>
            <RouterLink to={"/pantry"}>Pantry</RouterLink>
            <RouterLink to={"/profile"}>Profile</RouterLink>
            <RouterLink to={"/recipes"}>Recipes</RouterLink>
        </Wrapper>
    )
}

export default Navbar