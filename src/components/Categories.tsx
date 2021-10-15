import React from 'react'
import styled from 'styled-components'
import {categories,category} from '../data'
import { CategoryItem } from './CategoryItem'

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content: space-between;
`

export const Categories:React.FC = () => {
    return (
        <Container>
            {categories?.map((item:category)=> <CategoryItem item={item} key={item.id}/>)}
        </Container>
    )
}
