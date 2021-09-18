import React,{Fragment} from "react";

let WishMessage = (props) =>{
        console.log(props);
    return (
        <Fragment>
            <div className="card m-3 text-left">
                <div className="card-body">
                    <p className="h3 text-success">{props.msg}</p>
                </div>
            </div>
        </Fragment>
    );
};
export  default  WishMessage;