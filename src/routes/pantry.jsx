import List from "../components/List"
import PantryDetails from "../components/PantryDetails"

import { Section } from "./routes.styles"

const Pantry = () => {

    return (
        <Section>
            <PantryDetails />
            <List />
        </Section>
    )
}

export default Pantry