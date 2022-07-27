import { Button } from "@austdobe/react_component_library"
import { Wrapper, Input, Image } from "./Form.styles"


const Form = () => {

    return(
        <Wrapper>
            <Image src="https://via.placeholder.com/300x250" />
            <Input placeholder="Product Name" />
            <Input placeholder="Expiration Date" />
            <Input placeholder="Product ID" />
            <Button label="New Button" />
        </Wrapper>
    )
}

export default Form