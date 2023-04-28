import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./adviceStyle.css";

export default function AdviceComp() {
  const [aData, setAData] = useState();

  const adviceData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const adData = await res.json();
    setAData(adData);
  };
  useEffect(() => {
    adviceData();
  }, []);

  return (
    <>
      <Container className="contStyle">
        <Row className="rowStyle">
          <div className="CardStyle">
          {aData && (
            <div className="txtBox">
              <p className="idTxt">ADVICE #{aData.slip.id}</p>
              <p className="adviceTxt">"{aData.slip.advice}"</p>
              <svg
                width="480"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                className="lineStyle"
              >
                <g fill="none" fill-rule="evenodd">
                  <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                  <g transform="translate(212)" fill="#CEE3E9">
                    <rect width="6" height="16" rx="3" />
                    <rect x="14" width="6" height="16" rx="3" />
                  </g>
                </g>
              </svg>
            </div>
          )}

          <button className="btnStyle" onClick={adviceData}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </button>
        </div>
        </Row>
        
      </Container>
    </>
  );
}
