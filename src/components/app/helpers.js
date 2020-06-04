import emoji from "node-emoji";

export const date = string => ({
  format: () =>
    new Date(string).toLocaleDateString(window.navigator.language, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    })
});

export const renderers = {
  text: ({ value }) => value.replace(/:\w+:/gi, emoji.get)
};
