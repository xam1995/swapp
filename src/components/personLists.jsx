import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import DataTable from './dataTable';
import axios from 'axios';

class PersonLists extends React.Component {
    state = {
        searchTerm: '',
        dataArray: [],
        searchResultArray: [],
        links: [0,1,2,3,4,5,6,7,8],
        searchArray: [],
        searchIndex: -1
          
    }
    componentDidMount=()=> {
        this.loadDataFromApi();
    }
    loadDataFromApi=()=> {
    let one = 'https://swapi.dev/api/people/?page=1&format=json'
    let two = 'https://swapi.dev/api/people/?page=2&format=json'
    let three = 'https://swapi.dev/api/people/?page=3&format=json'
    let four = 'https://swapi.dev/api/people/?page=4&format=json'
    let five = 'https://swapi.dev/api/people/?page=5&format=json'
    let six = 'https://swapi.dev/api/people/?page=6&format=json'
    let seven = 'https://swapi.dev/api/people/?page=7&format=json'
    let eight = 'https://swapi.dev/api/people/?page=8&format=json'
    let nine = 'https://swapi.dev/api/people/?page=9&format=json'
    
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    const requestFour = axios.get(four);
    const requestFive = axios.get(five);
    const requestSix = axios.get(six);
    const requestSeven = axios.get(seven);
    const requestEight = axios.get(eight);
    const requestNine = axios.get(nine);

    axios
        .all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix, requestSeven, requestEight, requestNine])
        .then(
        axios.spread((...responses)=>{
            const responseOne = responses[0].data.results;
            const responseTwo = responses[1].data.results;
            const responseThree = responses[2].data;
            const responseFour = responses[3].data;
            const responseFive = responses[4].data;
            const responseSix = responses[5].data;
            const responseSeven = responses[6].data;
            const responseEight = responses[7].data;
            const responseNine = responses[8].data;
            const dataArray = responses;
            
            this.setState({dataArray: responses});
        })
        )
        .catch(error => {
            console.log(error); 
        })
    }
    createNameList = () => {
        
          
        //return this.state.persons[3].data.results.map(person => (<li key={person.url} value={person.url} onClick={this.setUrlForInfoCard}>{person.name}</li>))
      }
    searchEventHandler = (evt) => {
        this.setState({
          searchTerm: evt.target.value
        });
        this.searchCharacterinDatabase()
      }
    searchCharacterinDatabase = () =>{
        const searchArrays = this.state.dataArray.map(index => index.data.results.map(subindex=> subindex.name.toUpperCase()));
        const metaDataArrays = this.state.dataArray.map(index => index.data.results.map(subindex=> [{name: subindex.name.toUpperCase(), height:subindex.height, mass:subindex.mass, birthdate:subindex.birth_year, gender:subindex.gender}]));
        const p1 = searchArrays[0];
        const m1 = metaDataArrays[0];
        const m2 = metaDataArrays[1];
        const p2 = searchArrays[1];
        const p3 = searchArrays[2];
        const p4 = searchArrays[3];
        const p5 = searchArrays[4];
        const p6 = searchArrays[5];
        const p7 = searchArrays[6];
        const p8 = searchArrays[7];
        const p9 = searchArrays[8];
        const searchArray = [...p1, ...p2, ...p3, ...p4, ...p5, ...p6, ...p7, ...p8, ...p9];
        const metaDataArray = [...m1, ...m2];
        console.log(metaDataArray);
        const searchResult = searchArray.filter(entry => entry.includes(this.state.searchTerm.toUpperCase()));
        const metaDataResult = searchArray.findIndex(entry => entry.includes(this.state.searchTerm.toUpperCase()));
        this.setState({searchResultArray: searchResult});
        this.setState({searchIndex: metaDataResult});
        console.log("metaDataResults", metaDataResult)
      } 

    renderFunction = () => {
        if (this.state.dataArray.length === 0) return <p className="LoadText">Data not loaded...</p>
        return this.state.dataArray.map(index=> index.data.results.map(subindex=><div className='collapsible'><Collapsible trigger={subindex.name.toLocaleLowerCase()}><DataTable height={subindex.height} mass={subindex.mass} birthdate={subindex.birth_year} gender={subindex.gender}/></Collapsible></div>))
    }
    renderSearchResults = () => {
        if (this.state.searchResultArray.length === 0) return null
        return this.state.searchResultArray.map(index=> <div className='collapsible'><Collapsible trigger={index.toLocaleLowerCase()}></Collapsible></div>)
    }
    decisionFunction = () => {
        if (this.state.dataArray.length !== 0 && this.state.searchTerm.length < 1) return this.renderFunction()
        return this.renderSearchResults()

    }


    render() { 
        return  <div>
            <div className='top-banner'>
            <button className='navigation'>Star Wars Character Database</button>
            </div>)
            <div className='deathstar floating'><img src={'https://raw.githubusercontent.com/xam1995/swapp/xam1995-graphics/deathstar.png'} alt='death star img' height={'500vh'}/></div>
            <div className='bb8'><img src={'https://raw.githubusercontent.com/xam1995/swapp/xam1995-graphics/bb8.png'} alt='bb8 img' height={'380vh'}/></div>
            <div className='glow'>
            <div className='sideBar'>
            <div className='searchArea'>
            <input className='searchField' placeholder='Luke Bywalker' onChange={this.searchEventHandler} key={'searchField'}></input>
            <button className='searchButton' onClick={this.searc}>&#128269;</button>
            </div>
            {
            this.decisionFunction()
            }
            
        </div>
        </div>
        
        </div>;
    }
}
 
export default PersonLists;