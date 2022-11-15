const newBreakfastHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('input[name="breakfast-food-name"]').value;

  const category = 'breakfast';

  const response = await fetch('/api/history', {
    method: 'POST',
    body: JSON.stringify({
      name,
      category,
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

const newLunchHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('input[name="lunch-food-name"]').value;

  const category = 'lunch';

  const response = await fetch('/api/history', {
    method: 'POST',
    body: JSON.stringify({
      name,
      category,
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

const newDinnerHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('input[name="dinner-food-name"]').value;

  const category = 'dinner';

  const response = await fetch('/api/history', {
    method: 'POST',
    body: JSON.stringify({
      name,
      category,
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

const newSnacksHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('input[name="snacks-food-name"]').value;

  const category = 'snacks';

  const response = await fetch('/api/history', {
    method: 'POST',
    body: JSON.stringify({
      name,
      category,
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

document.querySelector('.new-breakfast').addEventListener('submit', newBreakfastHandler);

document.querySelector('.new-lunch').addEventListener('submit', newLunchHandler);

document.querySelector('.new-dinner').addEventListener('submit', newDinnerHandler);

document.querySelector('.new-snacks').addEventListener('submit', newSnacksHandler);