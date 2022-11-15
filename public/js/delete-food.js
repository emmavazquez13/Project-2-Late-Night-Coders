const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/history/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/diary');
    } else {
      alert('Failed to delete food item');
    }
  }
};

document
  .querySelector('.breakfast-food-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.lunch-food-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.dinner-food-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.snacks-food-list')
  .addEventListener('click', delButtonHandler);
