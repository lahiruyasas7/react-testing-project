import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";
import React from "react";
import "@testing-library/jest-dom";

describe("Greet", () => {
  it("Should render Hello with the name when name is provided", () => {
    render(<Greet name="lahiru" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
