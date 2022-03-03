export default function ({ store, redirect }) {
  const isAuthed = store.getters['auth/isAuthed']
  if (!isAuthed) {
    redirect('/')
  }
}
