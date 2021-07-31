import styled from "styled-components";
import tw from "twin.macro";

const PageContainer = styled.div`
  ${tw`flex text-3xl text-pink-700`}
`;

export default function Welcome() {
  return (
    <div>
      <PageContainer>WELCOME</PageContainer>
    </div>
  );
}
