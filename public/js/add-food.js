const newFoodHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('input[name="food-name"]').value;

  const category = event.path[1].id;

  const response = await fetch('/api/history', {
    method: 'POST',
    body: JSON.stringify({
      name,
      category
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/diary');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('.new-food-form')
  .addEventListener('submit', newFoodHandler);
