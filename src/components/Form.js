import { nanoid } from 'nanoid'
import { getDatabase, child, ref, set ,get } from "firebase/database"
import { isWebUri } from 'valid-url'
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from 'react-bootstrap/Tooltip'
import React from 'react'

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            longURL: '',
            preferedAlians: '',
            generateURL: '',
            loading: false,
            errors: [],
            errorMessage: {},
            toolTopMessage: 'Copy To Clip Boar'
        };
    }
}


