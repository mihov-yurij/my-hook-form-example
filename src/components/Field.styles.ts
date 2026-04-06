import styled from "@emotion/styled";

export const Container = styled.div<{ errorState: boolean }>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  margin: 16px 0;
  padding: 0;
  border: none;
  width: 100%;

  input,
  textarea {
    border: 1px solid ${({ errorState }) => (errorState ? "red" : "#d9d9d9")};
    padding: 8px;
    border-radius: 4px;
  }
`;

export const Label = styled.label`
  margin-bottom: 4px;
  font-weight: 600;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;
