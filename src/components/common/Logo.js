import logoImage from '../../styles/assets/Logo.png'
import styled from 'styled-components' 

const StyledLogo = styled.img`
  width: 216px;
  height: 32.11px;
`

const Logo = () => {
  return (
    <StyledLogo
      src={logoImage}
      alt='ByrdMR logo'
      className='byrd-logo'
    />
  )
}

export default Logo