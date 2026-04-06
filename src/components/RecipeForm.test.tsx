import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecipeForm } from "./RecipeForm";
import { vi } from "vitest";

// 1. Создаем заглушку для функции сохранения
const mockSave = vi.fn();

it("should render the basic fields", () => {
  // 2. Передаем её в компонент
  render(<RecipeForm saveData={mockSave} />);
  
  expect(
    screen.getByRole("heading", { name: "New recipe" }),
  ).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: /name/i })).toBeInTheDocument();
  expect(
    screen.getByRole("textbox", { name: /description/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("spinbutton", { name: /servings/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /add ingredient/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
});


export default ;
