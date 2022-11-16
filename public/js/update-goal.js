const editFormHandler = async (event) => {
  event.preventDefault();

  const calorie_goal = document
    .querySelector('input[name="goal-value"]')
    .value.trim();

  const id = event.target.getAttribute('data-id');

  const response = await fetch(`/api/users/goal/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      calorie_goal,
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
  .querySelector('.edit-goal-form')
  .addEventListener('submit', editFormHandler);
