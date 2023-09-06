import {environment} from "../../environments/environment.development";

const {JPH_API} = environment

const users = `${JPH_API}/users`
const posts = `${JPH_API}/posts`

const urls = {
  users:{
    base:users,
    byId:(id:number):string => `${users}/${id}`
  },
  posts:{
    base:posts,
    byId:(id:number):string => `${posts}/${id}`
  }
}

export {
  urls
}
