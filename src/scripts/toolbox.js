/**
 * Returns an object containing tool icon names and components.
 * @returns {object} Object of tool icon names and components.
 */

export default function generateToolIcon() {
  const icons = import.meta.glob("../icons/tools/*.astro", { eager: true });

  const baseIconRegex = /\/([^\/]+)Icon\.astro$/;
  const coloredIconRegex = /\/([^\/]+)IconColor\.astro$/;

  const tools = {};
  const added = new Set()

  Object.entries(icons).forEach(([key, value], idx) => {
    const baseMatch = key.match(baseIconRegex);
    const coloredMatch = key.match(coloredIconRegex)

    const match = baseMatch ? baseMatch : coloredMatch

    if(match) {

      if(!added.has(match[1])) {
        tools[match[1]] = {
          base: value
        }

        added.add(match[1])
      } else {
        tools[match[1]] = {...tools[match[1]], colored: value}
      }

    }
  });

  console.log(tools)

  return tools;
}
