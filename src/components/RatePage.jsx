import styled from "styled-components";

const RatePage = ({ setSubmit, rate, setRate }) => {
  const btnArr = [1, 2, 3, 4, 5];

  return (
    <Container>
      <StarIcon>
        <img src="/images/Star.png" alt="star icon" />
      </StarIcon>
      <Description>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </Description>
      <Buttons>
        {btnArr.map((btn) => {
          return (
            <Button
              style={rate === btn ? { backgroundColor: "#fc7614" } : {}}
              onClick={() => setRate(btn)}
            >
              {btn}
            </Button>
          );
        })}
      </Buttons>
      <SubmitBtn
        onClick={() => {
          rate && setSubmit(true);
        }}
      >
        SUBMIT
      </SubmitBtn>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(35, 42, 52, 1);
  max-width: 412px;
  padding: 35px;
  border-radius: 15px;
`;

const StarIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: rgba(38, 46, 56, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & h1 {
    font-size: 28px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
  }

  & p {
    font-size: 15px;
    font-weight: 400;
    color: rgba(150, 159, 173, 1);
    line-height: 24px;
  }
`;

const Button = styled.button`
  font-family: "Overpass", sans-serif;
  font-weight: 700;
  width: 51px;
  height: 51px;
  background-color: rgba(38, 46, 56, 1);
  border: none;
  border-radius: 50%;
  color: rgba(124, 135, 152, 1);
  transition: 0.3s;

  &:hover {
    background-color: rgba(124, 135, 152, 1);
    color: #fff;
    cursor: pointer;
  }
`;

const Buttons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const SubmitBtn = styled.div`
  font-family: "Overpass", sans-serif;
  font-weight: 700;
  font-size: 15px;
  width: 100%;
  padding: 15px;
  background-color: rgba(252, 118, 20, 1);
  color: #fff;
  border: none;
  border-radius: 25px;
  margin-bottom: 15px;
  line-height: rgba(38, 46, 56, 1);
  text-align: center;

  &:hover {
    background-color: #fff;
    color: rgba(252, 118, 20, 1);
    cursor: pointer;
    transition: 0.3s;
  }
`;

export default RatePage;
