import { categories } from '../data'
import styledComponents from 'styled-components'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'


const Container = styledComponents.div`
    display: flex;
    padding: 20px;
    ${mobile({ padding: "0px", flexDirection: "column" })};
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
            <CategoryItem item={item} key={item.id}></CategoryItem>
        ))}
    </Container>
  )
}

export default Categories