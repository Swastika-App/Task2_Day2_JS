import { getUsers, getUser, createUser, updateUser, deleteUser } from './services.js';

(async () => {
  let result = await getUsers();
  console.log('GET ALL', result);
  
  result = await getUser(1);
  console.log('GET', result);

  const newUser = {
    name: 'John Doe',
    job: 'Software Engineer',
  };

  result = await createUser(newUser);
  console.log('POST', result);

  result.name = 'Jane Doe';

  result = await updateUser(1, result);
  console.log('PUT', result);

  result = await deleteUser(1);
  console.log('DEL', result);
})();
