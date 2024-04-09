export const handleScroll = (anchorId: string) => {
  const section = document.getElementById(anchorId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
