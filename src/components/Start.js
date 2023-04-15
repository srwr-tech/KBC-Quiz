import React, { useRef } from "react";
import { MDBBtn } from "mdb-react-ui-kit";


const Start = ({ setName, setTimeOut }) => {
  const inputRef = useRef();

  const handleClick = () => {
    setTimeOut(false);
    inputRef.current.value && setName(inputRef.current.value);
  };
  return (
    <div className="pic">
    

    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
        marginTop: "300px",
      
        
      }}
      
    >
    
    <h1 >Welcome to KBC</h1>
    <h4 > Please Login to Continue</h4>
      <input
        type="text"
        placeholder="Enter Name"
        ref={inputRef}
        className="form-control"
      />
      <MDBBtn style={{ width: "100%" }} className="mt-2" onClick={handleClick}>
        Start Game
      </MDBBtn>
    </div>
    </div>
  );
};

export default Start;
