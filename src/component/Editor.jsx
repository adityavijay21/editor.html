import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


import {useState} from "react";

import '../App.css';

import { Controlled as ControlledEditor } from 'react-codemirror2';
import {Box, styled} from '@mui/material';
import { CloseFullscreen } from '@mui/icons-material';

const Container = styled(Box)`
flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 8px 8px;
`

const Heading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex
`

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #ffffff;
  font-weight: 700;
`




const Editor = ( {heading, icon, color, value, onchange}) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onchange(value);
    }


    return(
        //outerbox
        <Container style={ open ? null : { flexGrow: 0}}>
            {/*upperbox*/}
            <Header>
                {/*upperbox ka left side wala*/}
                <Heading>
                    <Box component={"span"} style={{
                        background: color,
                        height:20 ,
                        width:20,
                        display: 'flex',
                        placeContent:'Center',
                        borderRadius : 5,
                        marginRight: 5,
                        paddingBottom : 2,
                        color: '#000'
                                                     }}>{icon}</Box>
                    {heading }
                </Heading>
                {/*upperbox ka right side wala*/}
                <CloseFullscreen
                    fontSize={"small"}
                    style={{alignSelf: 'center'}}
                onClick={() => setOpen(prevState =>  !prevState)}
                />

            </Header>
            {/*neeche-walaa-dabba*/}
            <ControlledEditor
                className="controlled-editor"
                value={value}
                onBeforeChange={handleChange}
                options={{
                    theme: 'material',
                    lineNumbers: true
                }}
            />

        </Container>
    )
}
export default Editor;
