import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Card } from './components/card';
import { List } from './components/list';
import { Search } from './components/search';
import { ThemeContext } from './themecontext';
import { SwipeButton } from './components/_utils/swipeButton';
import { SelectBox } from './components/_utils/selectBox';

import "./styles.scss";

const App = () => {
    const [data, setData ] = useState([]);
    const [filterdata, setFilterdata] = useState([]);
    const [gridView, setGridView] = useState(true);
    const [theme] = useState("dark");

    const context = useContext(ThemeContext);

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios('https://corona.lmao.ninja/v2/countries');
        setData(response.data);
        
      }
      fetchData();
    }, []);

    const searchData = (value) => {
      const filteredData = _.filter(data, (item) =>  { 
        return _.includes(_.toLower(item.country), _.toLower(value));
      });

      setFilterdata(filteredData);
    }

    const mapData = value => {
      if(gridView) {
        return value.map(item=> <Card data={item} key={item.country} theme={theme} />)
      }
      return value.map(item => <List data={item} key={item.country} theme={theme} />)
    }

    const getData = () => {
      if(!_.isEmpty(filterdata)) {
        return mapData(filterdata);
      }
      return mapData(data);
    }

    const handleView = (view) => {
      if(view === "grid" && !gridView) {
        setGridView("true")
      } 

      if(view === "list" && gridView) {
        setGridView(!gridView);
      } 
    }

    const getSortValue = (value) => {
      const split_value = _.split(value, '_');
      const filteredData = _.orderBy(data, split_value[0],  split_value[1]);
      setFilterdata(filteredData);
    }

    return (
        <div className={`App ${context.theme}-theme`}>
          <div className="container">
            <div className="top-header">
              <div className="theme-swipe">
                <SwipeButton />
              </div>
              <div className="sort-section">
                <SelectBox 
                  sortvalue={getSortValue}
                />
              </div>
            </div>
            
              <Search 
                search={searchData} 
                view={handleView}
              />
            <div className="card-container">
            {getData()}
            </div>
          </div>
        </div>
    );
} 

export default App;
