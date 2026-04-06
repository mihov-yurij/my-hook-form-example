import { FieldError } from "react-hook-form";
import React, { ReactNode } from "react";
import { Container, ErrorMessage } from "./Field.styles";




interface FieldProps {
  label?: string;          // Добавлено
  children: ReactNode;     // Добавлено
  htmlFor?: string;        // Добавлено
  error?: FieldError;
}

export const Field = ({ label, children, htmlFor, error }: FieldProps) => {
 const child = React.Children.only(children) as React.ReactElement<React.HTMLAttributes<HTMLElement>>;

  // 2. Указываем TS, что у пропсов может быть поле id
  const childProps = child.props as { id?: string };

  // 3. Извлекаем id безопасно
  const id = htmlFor || childProps.id;
  const errorId = id ? `${id}-error` : undefined;
const labelElement = label && <label htmlFor={id}>{label}</label>;
  return (
    <Container errorState={!!error}>
      {labelElement}
       {React.cloneElement(child as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
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


export default Field;
export type { FieldProps };
export { Container, ErrorMessage };




