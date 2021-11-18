export const loadPersistentState = () => {
  const todos = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build simething fun!', completed: false, color: 'blue' },
  ]
  localStorage.setItem('todos', JSON.stringify(todos))
}
