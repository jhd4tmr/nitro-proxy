export default defineEventHandler(async (event) => {
  setCookie(event, "key", "v", {
    domain: "",
    maxAge: 300,
    path: "/",
    sameSite: "strict",
  });
  setCookie(event, "key2", "v", {
    domain: "",
    maxAge: 300,
    path: "/",
    sameSite: "strict",
  });
  return {};
});
