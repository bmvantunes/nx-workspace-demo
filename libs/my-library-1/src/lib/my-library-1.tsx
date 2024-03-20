import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MyLibrary1Props {}

const StyledMyLibrary1 = styled.div`
  color: pink;
`;

export function MyLibrary1(props: MyLibrary1Props) {
  return (
    <StyledMyLibrary1>
      <h1>Welcome to MyLibrary1!</h1>
    </StyledMyLibrary1>
  );
}

export default MyLibrary1;
