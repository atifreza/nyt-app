import React from "react";
import { useSelector } from "react-redux";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import PrivateRoutes from "../PrivateRoutes";
import PageNotFound from "../../components/PageNotFound";

// Mock useSelector hook
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("PrivateRoutes", () => {
  it("renders Outlet component when isLoggedIn is true", () => {
    useSelector.mockReturnValue({ isLoggedIn: true });

    render(
      <MemoryRouter initialEntries={["/private"]}>
        <Routes>
          <Route path="/" element={<PrivateRoutes />} />
          <Route path="/private" element={<div>Private Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Private Page/i)).toBeInTheDocument();
  });

  it("redirects to '/page_not_found' when isLoggedIn is false", () => {
    useSelector.mockReturnValue({ isLoggedIn: false });

    render(
        <MemoryRouter initialEntries={["/ssadad"]}>
          <Routes>
            <Route path="/" element={<PrivateRoutes />} />
            <Route path="/ssadad" element={<PageNotFound />} />
          </Routes>
        </MemoryRouter>
      );
  
      const imageElement = screen.getByAltText('Page Not Found');

      expect(imageElement).toBeInTheDocument();
  });
});
