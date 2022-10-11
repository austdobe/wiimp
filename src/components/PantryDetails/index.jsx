

import { Wrapper, Content, Title, Stat } from "./PantryDetails.styles"

const PantryDetails = () => {


    return (
        <Wrapper>
            <Title>Current Pantry</Title>
            <Content>
                <h2>Total Number of Items:</h2>
                <Stat>8</Stat>
                <h2>Possible Recipes:</h2>
                <Stat>3</Stat>
                <h2>Number of Expired Items:</h2>
                <Stat>1</Stat>
                <h2>Next Expiration Date:</h2>
                <Stat>11/20/2022</Stat>
            </Content>
        </Wrapper>
    )
}

export default PantryDetails