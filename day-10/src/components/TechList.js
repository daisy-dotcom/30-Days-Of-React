import React from "react";

class TechList extends React.Component {
    render() {
        const { techs } = this.props
        return techs.map((tech) => <li key={tech}>{tech}</li>)
    }
}

export default TechList;
