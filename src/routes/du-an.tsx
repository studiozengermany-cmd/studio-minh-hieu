import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/du-an")({
  component: () => <Outlet />,
});
