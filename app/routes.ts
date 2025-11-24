import { type RouteConfig, index, prefix, layout, route } from "@react-router/dev/routes";

export default [
    ...prefix("", [
        layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("a-propos","routes/about.tsx"),
        route("boutique","routes/boutique.tsx"),
        route("nos-services","routes/services.tsx"),
        route("contact","routes/contact.tsx"),
        route("actualites","routes/news.tsx"),
        route("actualites/:slug","routes/news.$slug.tsx"),
        route("carriere/offres","routes/careers.tsx")
    ]),
  ]),
] satisfies RouteConfig;