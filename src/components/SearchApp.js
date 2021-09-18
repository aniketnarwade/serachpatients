import React,{useState,useEffect} from "react";
import Axios from "axios";
import { Dropdown } from 'primereact/dropdown';
import {Link} from "react-router-dom";
import { Button } from 'primereact/button';

let SearchApp = () => {
    let [patients , setPatients] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const onCountryChange = (e) => {
        setSelectedCountry(e.value);
    };
    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="  country-item country-item-value">
                    <div>{option.name}</div>

                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <div > <i className="fa fa-user-circle"/> {option.name}</div>
            </div>
        );
    }

    useEffect(() => {
        console.log('Fetching Data from Server');
        Axios.get('https://gist.githubusercontent.com/aniketnarwade/b70f51c8f6bbb6d0b7d9229d781fdc90/raw/effd2799b12a8e4d46445bde219c6e17dff451c4/patients.json').then((response) => {
            setPatients(response.data);
        }).catch((err) => {
            console.error(err);
        });
    }, []);
  return(
      <React.Fragment>
        <div className="container">
            <div className="row mt-3">
                <div className="col">

                    <Dropdown value={selectedCountry} options={patients} onChange={onCountryChange}
                              optionLabel="name" filter showClear filterBy="name" placeholder="Search user"
                              valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />

                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4">
                    {
                        selectedCountry ? <div className="card">
                            <div className="card-body text-center">
                                <h4>Name : <span className="font-weight-bold">{selectedCountry.name}</span></h4>
                                <h4>Mobile : <span className="font-weight-bold">{selectedCountry.mobile}</span></h4>
                                <h4>Diseases : <span className="font-weight-bold">{selectedCountry.diseases}</span></h4>
                                <h4>Date Of Joining : <span className="font-weight-bold">{selectedCountry.date}</span></h4>
                                <Link to={`/profile/${selectedCountry.id}`} >Visite Profile</Link>
                            </div>
                        </div> : null
                    }
                </div>
            </div>
        </div>
      </React.Fragment>
  )
};

export default SearchApp;