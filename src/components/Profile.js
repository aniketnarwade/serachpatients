import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Axios from "axios";

let Profile = () => {
    let pId = useParams().id;

    let [patients , setPatients] = useState([]);
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

          {
              patients.map(e => {
                  return(
                      <div>
                          {
                              e.id === pId ?
                                  <React.Fragment>
                                      <div className="col-md-4 m-auto mt-5">
                                          <div className="card">
                                              <div className="card-header bg-primary text-center">
                                                  <i className="fa fa-user-circle fa-4x"/> <span className="font-weight-bold">{e.name}</span>
                                              </div>
                                              <div className="card-body">
                                                  <h4>Id : <span className="font-weight-bold">{e.id}</span></h4>
                                                  <h4>Name : <span className="font-weight-bold">{e.name}</span></h4>
                                                  <h4>Mobile : <span className="font-weight-bold">{e.mobile}</span></h4>
                                                  <h4>Diseases : <span className="font-weight-bold">{e.diseases}</span></h4>
                                                  <h4>Date Of Joining : <span className="font-weight-bold">{e.date}</span></h4>
                                                  <h4>Branch : <span className="font-weight-bold">{e.branch}</span></h4>

                                              </div>
                                          </div>
                                      </div>


                                  </React.Fragment> : null
                          }
                      </div>
                  )
              })
          }

      </React.Fragment>
  )
};

export default Profile;