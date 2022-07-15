import { Wrapper, RouterLink } from './Navbar.styles';

const Navbar = () => {

    return (
        <Wrapper>
            <RouterLink to={"/user/pantry"}>Pantry</RouterLink>
            <RouterLink to={"/user/profile"}>Profile</RouterLink>
            <RouterLink to={"/user/recipes"}>Recipes</RouterLink>
        </Wrapper>
    )
}

export default Navbar