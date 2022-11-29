export const routes = {
  allRole : `get:api/role`,

  //auth
  userRegister :`post:api/user/register`,
  loginUser :`post:api/user/login`,


  //ticket
  getTicketByID : `get:api/posts/`,
  postTicket :  `post:api/posts`,
  deleteTicket: `delete:api/posts/`,
  updateTicket: `patch:api/posts/`
}

