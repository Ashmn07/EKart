import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

export const Announcement:React.FC = () => {
    return (
        <Container>
            Super Deal! Buy 1 Get 1 Free On Orders above ₹2000
        </Container>
    )
}
