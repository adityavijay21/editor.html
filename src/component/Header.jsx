
import {AppBar,Toolbar,styled} from "@mui/material";

const Container = styled(AppBar)`
background : black;
height : 9vh;
`
const Header = () => {

    const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' ;


    return(
        <Container position = 'static'>
            <Toolbar>
               < img src={logo} alt='logo' style={{width:40}}/>
            </Toolbar>
        </Container>
    )
}
export default Header;
