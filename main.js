function calculate(event) {
  event.preventDefault();
  const form = event.path[0];
  const formDataEntries = new FormData(form).entries();
  const { effort, complexity } = Object.fromEntries(formDataEntries);
  const points = [
    [1, 3, 5],
    [3, 8, 13],
    [5, 13, 21],
  ];
  document.querySelector('h1').innerText = points[effort][complexity];
}
document.querySelector('form').addEventListener('submit', calculate);
