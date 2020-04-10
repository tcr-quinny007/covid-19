import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './App.module.css';

import coronaImage from './image/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData();
        // console.log(data);
        this.setState({ data: data })
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
        // console.log(country);
        this.setState({ data, country: country })
    }

    render() {
        const { data, country } = this.state;

        return (
        <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID-19"/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
        )
    }
}

export default App;
