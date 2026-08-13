const BASE = "/api";

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

export const api = {
  getAvailability: (date) => request(`/appointments/availability?date=${encodeURIComponent(date)}`),
  bookAppointment: (payload) =>
    request("/appointments", { method: "POST", body: JSON.stringify(payload) }),
  sendContactMessage: (payload) =>
    request("/contact", { method: "POST", body: JSON.stringify(payload) }),
  getTestimonials: (featured) =>
    request(`/testimonials${featured ? "?featured=true" : ""}`),
  getBlogPosts: () => request("/blog"),
  getBlog: (slug) => request(`/blog/${slug}`),
  getEvents: (upcoming = true) => request(`/events${upcoming ? "?upcoming=true" : ""}`),
  registerForEvent: (id) => request(`/events/${id}/register`, { method: "POST" }),
};
