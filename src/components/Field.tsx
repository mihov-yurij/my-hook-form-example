import React from "react";
import { Container, Label, ErrorMessage } from  "./Field.styles.ts";


interface FieldProps {
  label: string;
  htmlFor?: string; 
  error?: {
    message: string;
  };
  children: React.ReactElement;
}


export const Field = ({ label, children, htmlFor, error }: FieldProps) => {
  // Извлекаем id из ребенка или пропса
  const child = React.Children.only(children);
  const id = htmlFor || child.props.id;
  const errorId = `${id}-error`;

  return (
    <Container errorState={!!error}>
      {label && <Label htmlFor={id}>{label}</Label>}
      
      {/* Клонируем ребенка, чтобы прокинуть aria-атрибуты */}
      {React.cloneElement(child, {
        id,
        "aria-invalid": !!error,
        "aria-describedby": error ? errorId : undefined,
      })}

      {error && (
        <ErrorMessage id={errorId} role="alert">
          {error.message}
        </ErrorMessage>
      )}
    </Container>
  );
};
