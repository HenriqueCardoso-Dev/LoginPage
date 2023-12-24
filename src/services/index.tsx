export const ServerAction = (data: {
  name: string,
  email: string,
}) => {
  localStorage.setItem('name', data.name);
  localStorage.setItem('email', data.email);
}

export const Logout = () => {
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  window.location.reload();
}
