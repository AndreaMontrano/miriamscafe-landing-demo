import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La pagina che cerchi non esiste. Torna alla home per scoprire Miriam's Cafè.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Qualcosa è andato storto
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Prova a ricaricare la pagina o torna alla home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Riprova
          </button>
          <a href="/" className="btn-ghost">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Miriam's Cafè Rivoli | Specialty Coffee, Brunch e Colazioni" },
      {
        name: "description",
        content:
          "Miriam's Cafè a Rivoli: specialty coffee, brunch, colazioni, matcha latte, aperitivi e coccole in tazza in Piazza Cavallero 11/a.",
      },
      { name: "author", content: "Miriam's Cafè" },
      { property: "og:title", content: "Miriam's Cafè Rivoli | Specialty Coffee & Brunch" },
      {
        property: "og:description",
        content:
          "Specialty coffee, brunch colorati, matcha latte e aperitivi nel cuore di Rivoli. Piazza Cavallero 11/a.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Miriam's Cafè" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#f6ecd9" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Miriam's Cafè",
          description:
            "Specialty Coffee Lab & Brunch a Rivoli: caffè speciali, brunch, colazioni, matcha latte e aperitivi.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Piazza Cavallero 11/a",
            addressLocality: "Rivoli",
            addressRegion: "TO",
            postalCode: "10098",
            addressCountry: "IT",
          },
          telephone: "+39 3927407021",
          servesCuisine: ["Specialty Coffee", "Brunch", "Colazioni", "Aperitivo"],
          priceRange: "€€",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
