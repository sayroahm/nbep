export async function onRequest() {
  return new Response(JSON.stringify({ message: "Hello, world!" }), {
    headers: { "content-type": "application/json" },
  });
}
