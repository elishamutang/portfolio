/**
 * Returns an object containing tool icon names and components.
 * @returns {object} Object of tool icon names and components.
 */

export default function generateToolIcon() {
  const icons = import.meta.glob("../icons/tools/*.astro", { eager: true });

  const regex = /\/([^\/]+)Icon\.astro$/;
  const tools = [];

  Object.entries(icons).forEach(([key, value]) => {
    const match = key.match(regex);

    if (match) {
      tools.push({ name: match[1], component: value });
    }
  });

  return tools;
}
