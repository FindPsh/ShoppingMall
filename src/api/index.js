import http from '@/utils/request'
import { getMenu } from '@/api/site'
// export const login = ({ username, password }) => {
//   return http.post("/token-auth/", { username, password });
// };
// 登陆
export const login = async ({ username, password }) => {
  const res = await http.post('/token-auth/', { username, password })
  return res
}
// login({username: 123, password: 123}).then(res => res.data).catch(err);
// async ()=> { let res = await login({username: 123, password: 123})}
// 注册   登出  获取。。。信息   修改。。。。信息
// 登出
export const logout = async () => await http.get('/logout')

export const user = () => http.get('/user/')
export const edituser = (id) => http.put(`/user/${id}/`)
export default { login, logout, getMenu }
