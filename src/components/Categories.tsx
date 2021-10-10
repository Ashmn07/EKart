import React from 'react'
import styled from 'styled-components'
import {categories,category} from '../data'
import { CategoryItem } from './CategoryItem'

const Container = styled.div``

export const Categories:React.FC = () => {
    return (
        <Container>
            {categories?.map((item:category)=> <CategoryItem item={item}/>)}
        </Container>
    )
}
