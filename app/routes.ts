import { type RouteConfig, index, prefix, layout, route } from "@react-router/dev/routes";

export default [
    ...prefix("", [
        layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("a-propos","routes/about.tsx"),
        route("nos-services","routes/services.tsx"),
        route("contact","routes/contact.tsx"),
        route("actualites","routes/news.tsx"),
        route("actualites/:slug","routes/news.$slug.tsx")
    ]),
  ]),
] satisfies RouteConfig;