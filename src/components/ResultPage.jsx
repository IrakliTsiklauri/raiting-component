import React from "react";
import styled from "styled-components";

const ResultPage = ({ rate }) => {
  return (
    <ResultContainer>
      <img src="/images/payment.png" alt="star icon" />
      <SelectedScore>
        <p>You selected {rate} out of 5</p>
      </SelectedScore>
      <ThankText>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </ThankText>
    </ResultContainer>
  );
};

const ResultContainer = styled.div`
  background-color: rgba(35, 42, 52, 1);
  width: 412px;
  padding: 35px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SelectedScore = styled.div`
  background-color: #333f4d;
  color: rgba(252, 118, 20, 1);
  padding: 8px 15px;
  border-radius: 25px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThankText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 13px;

  & h2 {
    color: #fff;
    font-size: 28px;
    font-weight: 700;
  }

  & p {
    color: rgba(150, 159, 173, 1);
    font-size: 15px;
    font-weight: 400;
  }
`;

export default ResultPage;
