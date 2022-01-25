import React, { useState, useEffect } from 'react';

import Markdown from 'markdown-to-jsx';
import useNavbar from '../hooks/useNavbar'

import Bevezetes from './docs/Bevezetes';
import Automl from "./docs/Automl"
import Python from "./docs/Python"
import R from "./docs/R"
import OsszesitoTablazat from "./docs/OsszesitoTablazat"
import Demo from "./docs/Demo"
import Befejezes from './docs/Befejezes';

import styled from 'styled-components';
import '../style/main_styles.css';

const StyledRef = styled.div`
    padding-top: 15%;
`

const Docs = () => {
    const props = useNavbar()

    const [bevezetes, setBevezetes] = useState('');


    useEffect(() => {
        importMarkdown("./md/bevezetes.MD", setBevezetes)
    }, []);

    const importMarkdown = (fileName, setPost) => {
        import(`${fileName}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <StyledRef ref={props.bevezetesRef} />
            <Bevezetes />

            <StyledRef ref={props.automlRef} />
            <Automl />

            <StyledRef ref={props.pythonRef} />
            <Python />

            <StyledRef ref={props.rRef} />
            <R />

            <StyledRef ref={props.demoRef} />
            <Demo />

            <StyledRef ref={props.osszesitoTablazatRef} />
            <OsszesitoTablazat />

            <StyledRef ref={props.befejezesRef} />
            <Befejezes />

            <Markdown>
                {bevezetes}
            </Markdown>
        </div >
    );
}

export default Docs;