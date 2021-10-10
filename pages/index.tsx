import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div``;

const index: NextPage = () => {
  return (
    <Container>
      <h1>hello Styled-components</h1>
      <h2>hello Styled-components</h2>
      <h3>hello Styled-components</h3>
      <h4>한글이다옹.</h4>
    </Container>
  );
};

export default index;
