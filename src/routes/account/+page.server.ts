export async function load({ locals }) {
  const auth = await locals.validate();

  if (auth) {
    return { authenticated: true, user: auth.user };
  }
  return { authenticated: false };
}
