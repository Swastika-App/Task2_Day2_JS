const baseUrl = 'https://reqres.in/api/users/';

export const getUsers = async () => {
  const response = await fetch(`${baseUrl}?page=2`);
  return response.json();
};

export const getUser = async id => {
  const response = await fetch(`${baseUrl}${id}`);
  return response.json();
};

export const createUser = async user => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

export const updateUser = async (id, user) => {
  const response = await fetch(`${baseUrl}${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

export const deleteUser = async id => {
  const response = await fetch(`${baseUrl}${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
