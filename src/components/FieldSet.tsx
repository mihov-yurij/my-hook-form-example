import styled from "@emotion/styled";
import React from "react";

interface FieldSetProps {
  label?: string;
  children: React.ReactNode;
}
export const FieldSet = ({ label, children }: FieldSetProps) => {
  return (
    <Container errorState={false}>
      {label && <Legend>{label}</Legend>}
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

const Container = styled.div<{ errorState: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 0;
  
  input{ 
  border: 1px solid ${({ errorState }) => (errorState ? "#f87171" : "#d9d9d9")};
  border-radius: 6px;}
  `;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: self-start;
`;

const Legend = styled.legend`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;