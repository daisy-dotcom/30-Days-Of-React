import React from "react";
import TechList from "./TechList";
class Tech extends React.Component {

    render(){
        return (
            <ul>
                <TechList techs={this.props.techs}/>
            </ul>
        )
    }

}

export default Tech;