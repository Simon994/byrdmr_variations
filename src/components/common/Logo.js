import logoImage from '../../styles/assets/Logo.png'
import styled from 'styled-components'

const StyledLogo = styled.img`
  position: absolute;
  top: 51px;
  left: 50%;
  transform: translate(-50%);
  width: 200px;
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