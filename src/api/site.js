import http from '@/utils/request'

export const getMenu = () => http.get('/admin/menu/tree/')
