export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight || 0;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};