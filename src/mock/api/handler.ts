import { http, HttpResponse } from "msw";
import { blogs } from "../data/blogs.data";

export const handlers = [
  http.get("/api/blogs", () => {
    return HttpResponse.json({ blogs });
  }),
  http.get("/api/blogs/:id", ({ params }) => {
    const blog = blogs.find((b) => b.id === params.id);
    if (blog) {
      return HttpResponse.json(blog, { status: 200 });
    } else {
      return HttpResponse.json({ message: "Blog not found" }, { status: 404 });
    }
  })
];
