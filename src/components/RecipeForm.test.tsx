import { it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import RecipeForm from "./RecipeForm";

// Создаем мок-функцию с корректным типом
const mockSave = vi.fn();

beforeEach(() => {
  vi.clearAllMocks(); // Очищаем историю вызовов перед каждым тестом
});

it("should render all registration fields", () => {
  render(<RecipeForm saveData={mockSave} />);

  expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /create account/i })).toBeInTheDocument();
});

it("should call saveData with correct values on successful submit", async () => {
  const user = userEvent.setup();
  render(<RecipeForm saveData={mockSave} />);

  // Заполняем форму
  await user.type(screen.getByLabelText(/your name/i), "Ivan Ivanov");
  await user.type(screen.getByLabelText(/email/i), "example@mail.com");
  await user.type(screen.getByLabelText(/password/i), "secret123");

  // Отправляем форму
  await user.click(screen.getByRole("button", { name: /create account/i }));

  // Проверяем, что saveData была вызвана с нужными данными
  expect(mockSave).toHaveBeenCalledTimes(1);
  expect(mockSave).toHaveBeenCalledWith({
    name: "Ivan Ivanov",
    email: "example@mail.com",
    password: "secret123",
  });
});






