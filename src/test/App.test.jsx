import React from "react";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App", () => {
  it("renderiza as principais secoes da pagina inicial", () => {
    render(<App />);

    expect(
      screen.getByRole("navigation", { name: /navegacao principal/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /galeria de produtos/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /nossa equipe/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /como nos encontrar/i })
    ).toBeInTheDocument();
  });

  it("configura metadados basicos de seo", () => {
    render(<App />);

    expect(document.title).toMatch(/michelle decoracoes/i);
    expect(
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute("content")
    ).toMatch(/cortinas, tapetes e solucoes em decoracao/i);
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute("href")
    ).toBe("http://localhost:3000/");
    expect(
      document.getElementById("michelle-decoracoes-structured-data")
    ).toBeInTheDocument();
  });

  it("liga os links da navegacao as secoes corretas", () => {
    render(<App />);

    const navigation = screen.getByRole("navigation", {
      name: /navegacao principal/i,
    });

    expect(
      within(navigation).getByRole("link", { name: /produtos/i })
    ).toHaveAttribute("href", "#Products");
    expect(
      within(navigation).getByRole("link", { name: /nossa equipe/i })
    ).toHaveAttribute("href", "#Team");
    expect(
      within(navigation).getByRole("link", { name: /localização/i })
    ).toHaveAttribute("href", "#MapSection");
  });
});
