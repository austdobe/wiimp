import UserBanner from "../components/UserBanner"
import List from "../components/List"

import { Section } from "./routes.styles"

const Pantry = () => {

    return (
        <Section>
            <UserBanner />
            <List />
        </Section>
    )
}

export default Pantry