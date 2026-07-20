import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./i18n";


function DefaultError({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="flex min-h-screen items-center justify-center bg-void-black px-4 text-center">
      <div className="max-w-md">
        <p className="text-eyebrow mb-6">Đã xảy ra lỗi</p>
        <h1 className="font-display text-[32px] leading-none text-ghost-white">
          Trang không tải được
        </h1>
        <a
          href="/"
          className="mt-8 inline-block text-[14px] font-medium text-ghost-white underline underline-offset-4"
        >
          Về trang chủ
        </a>
      </div>
    </div>
  );
}

function DefaultNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-void-black px-4 text-center">
      <div className="max-w-md">
        <p className="text-eyebrow mb-6">404</p>
        <h1 className="font-display text-[32px] leading-none text-ghost-white">
          Không tìm thấy trang
        </h1>
        <a
          href="/"
          className="mt-8 inline-block text-[14px] font-medium text-ghost-white underline underline-offset-4"
        >
          Về trang chủ
        </a>
      </div>
    </div>
  );
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultError,
    defaultNotFoundComponent: DefaultNotFound,
  });

  return router;
};

