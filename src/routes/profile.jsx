import { Section } from "./routes.styles"
import PantryDetails from "../components/PantryDetails"
import RecipesDetails from "../components/RecipesDetails"

const Profile = () => {

    return (
        <>
            <Section>
                <h1>Profile</h1>
                <PantryDetails />
                <RecipesDetails />
            </Section>
        </>
    )

}

export default Profile