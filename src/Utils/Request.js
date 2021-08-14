export async function createReq(url) {
  try {
    const res = await fetch(url);

    return res.json();
  } catch (e) {
    throw Error('oops')
  }
}
