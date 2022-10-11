

import { Wrapper, Content, Title, Stat } from "./RecipesDetails.styles"

const RecipesDetails = () => {


    return (
        <Wrapper>
            <Title>Current Recipes</Title>
            <Content>
                <h2>Number of Saved Recipes:</h2>
                <Stat>8</Stat>
                <h2>Number of Expired Items:</h2>
                <Stat>1</Stat>
            </Content>
        </Wrapper>
    )
}

export default RecipesDetails