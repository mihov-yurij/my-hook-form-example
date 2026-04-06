import styled from "@emotion/styled";

import { RecipeForm } from "./components/RecipeForm.tsx";
import "./App.css";
import { type Recipe } from "./components/types.ts";

export default function App() {
  const submitForm = (data: Recipe) => {
    const formData = new FormData();
    if (data.picture && data.picture.length > 0) {
      formData.append("files", data.picture[0]);
    }
    const recipeData = {
      name: data.name,
      description: data.description,
      amount: data.amount,
      ingredients: data.ingredients,
    };
    formData.append("data", JSON.stringify(recipeData));        

    return fetch("/api/recipes/create", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.ok) {
        // Handle successful upload
      } else {
        // Handle error
      }
    });
  };

  return (
    <Container>
      <RecipeForm saveData={submitForm} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;