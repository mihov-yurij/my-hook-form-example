import React from "react";
import { Container, Label, ErrorMessage } from "./Field.styles";

interface FieldProps {
  label?: string;
  htmlFor?: string;
  error?: {
    message?: string;
  };
  children: React.ReactElement;
}

export const Field = ({ label, children, htmlFor, error }: FieldProps) => {
  // 1. Принудительно приводим к типу ReactElement, чтобы TS видел .props
  const child = React.Children.only(children) as React.ReactElement;
  
  // 2. Указываем TS, что у пропсов может быть поле id
  const childProps = child.props as { id?: string };
  
  // 3. Извлекаем id безопасно
  const id = htmlFor || childProps.id;
  const errorId = id ? `${id}-error` : undefined;

  return (
    <Container errorState={!!error}>
      {label && <Label htmlFor={id}>{label}</Label>}
      
     
      {React.cloneElement(child as React.ReactElement<any>, {
        id,
        "aria-invalid": !!error,
        "aria-describedby": error ? errorId : undefined,
      })}

      {error?.message && (
        <ErrorMessage id={errorId} role="alert">
          {error.message}
        </ErrorMessage>
      )}
    </Container>
  );
};

