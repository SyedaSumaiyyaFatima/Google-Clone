function feelingLucky() {
  const urls = [
      "https://www.google.com/doodles",
      "https://www.google.com/maps",
      "https://www.google.com/news",
      "https://www.google.com/search?q=fun+facts",
      "https://www.google.com/search?q=random+quotes"
  ];
  const randomIndex = Math.floor(Math.random() * urls.length);
  window.location.href = urls[randomIndex];
}
