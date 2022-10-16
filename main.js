function calculate(event) {
  event.preventDefault();
  const form = event.path[0];
  const formDataEntries = new FormData(form).entries();
  const { effort, complexity } = Object.fromEntries(formDataEntries);
  const points = [
    [0, 1, 2, 3, 5],
    [1, 2, 3, 5, 8],
    [2, 3, 5, 8, 13],
    [3, 5, 8, 13, 21],
    [5, 8, 13, 21, 21],
  ];
  document.querySelector('h1').innerText = points[effort][complexity];
}
document.querySelector('form').addEventListener('submit', calculate);