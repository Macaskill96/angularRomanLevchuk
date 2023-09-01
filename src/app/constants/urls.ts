const baseUrl = 'https://jsonplaceholder.typicode.com'

const users = `${baseUrl}/users`
const posts = `${baseUrl}/posts`

const urls = {
  users:{
    base:users,
    byId:(id:number):string => `${users}/${id}`
  }
}

export {urls}
