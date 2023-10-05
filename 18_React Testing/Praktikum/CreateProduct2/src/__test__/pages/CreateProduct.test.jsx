import React from "react";
import { render, screen, within } from "@testing-library/react";
import Form from "../../Pages/CreateProduct"; // Sesuaikan dengan struktur direktori Anda
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect } from "vitest";

describe("Product Page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>
    );
  });

  describe("Render the Page", () => {
  it("Should Render The Form Component", () => {
    const form = screen.getByLabelText("product-form");
    expect(within(form).getByLabelText("input-product-name")).toBeTruthy();
  });
});

it("Should allow entering text in the product name input and display it", () => {
  const productNameInput = screen.getByLabelText("input-product-name");
  fireEvent.change(productNameInput, { target: { value: "Nama Produk Contoh" } });
  expect(productNameInput.value).toBe("Nama Produk Contoh");
});

it("Should allow selecting and displaying the chosen option in the product Category", () => {
  const productCategoryDropdown = screen.getByLabelText("input-product-category");
  fireEvent.change(productCategoryDropdown, { target: { value: "a" } });
  const selectedoption = within(productCategoryDropdown).getByText("Category a");
  expect(selectedoption).toBeTruthy();
});

it("Should allow selecting and displaying the chosen option in the product Freshness", () => {
  const productFreshnessRadio = screen.getByLabelText("product-freshness-radio")
  fireEvent.click(productFreshnessRadio)

  const selectedOption = screen.getByLabelText("Brand New")
  expect(selectedOption).toBeTruthy
})
});
