import React from 'react'
import styled from 'styled-components'
import {popularProduct,popularProducts} from '../data'
import { Product } from './Product'

const Container = styled.div`
    display:flex;
    padding:20px;
    flex-wrap: wrap;
    justify-content:space-between;
`

export const Products:React.FC = () => {
    return (
        <Container>
            {popularProducts.map((item:popularProduct)=> <Product item={item} key={item.id}/>)}
        </Container>
    )
}
