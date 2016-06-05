var React = require('react');
var Album = require('./Album.js');


//var Albums = server.array;

console.log('heisan');




class App extends React.Component {
    constructor(props){
        super(props);

        this.sort = this.sort.bind(this);
        this.filterAlbum = this.filterAlbum.bind(this);

        this.state = {
            sort: 'artist',
            filterAlbum: ''
        };

    }

   sort(column){
       this.setState({
           sort: column
       });
   }

    showResult(listValue, filterText){
        return listValue.year.includes(filterText)||
                listValue.title.toLowerCase().includes(filterText)||
                listValue.artist.toLowerCase().includes(filterText)
    }

    filterAlbum(text){
        this.setState(
            {
                filterAlbum: text.toLowerCase()
            }
        )
    }
    render() {
        return (
            <div>
                <h1>Albums</h1>

                    <input placeholder="Search" type="text" onChange={(event) => this.filterAlbum(event.target.value)}/>

                        <table>
                            <thead>
                        <tr>
                            <th onClick={() => this.sort('artist')}>Artist</th>
                            <th onClick={() => this.sort('title')}>Title</th>
                            <th onClick={() => this.sort('year')}>Year</th>
                        </tr>
                        </thead>
                            <tbody>
                            {this.props.array
                                .filter(listValue => this.showResult(listValue, this.state.filterAlbum))
                                .sort((left, right) => left[this.state.sort].localeCompare(right[this.state.sort]))
                                .map((listValue, index) => <Album key={index} {...listValue}/>)}

                            </tbody>

                        </table>
            </div>
        )
    }
}


/*
//var App = React.createClass({
//    render: function() {
//        return (
//            <div>
//                <h1>This should display on the skjerm</h1>
//                <p>This too!</p>
//            </div>
//        );
//    }
//});
*/
module.exports = App;
