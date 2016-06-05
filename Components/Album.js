var React = require('react');

class Album extends React.Component {

    render() {
        return(
            <tr>

                <td>{this.props.artist}</td>
                <td>{this.props.title}</td>
                <td>{this.props.year}</td>

            </tr>
        )
    }
    }
    module.exports = Album;
