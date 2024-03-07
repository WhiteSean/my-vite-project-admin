import { failResponse, successResponse } from '@/request/http';
import type { MockParams } from '@/types/user/mock';
import Mock from 'mockjs';

// 用户信息
Mock.mock(new RegExp('/api/user/info'), () => {
  const role = window.localStorage.getItem('userRole') || 'admin';
  return successResponse({
    name: 'Sean',
    avatar: 'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif',
    email: 'Sean@email.com',
    job: 'frontend',
    jobName: '前端艺术家',
    organization: 'Frontend',
    organizationName: '前端',
    location: 'hangzhou',
    locationName: '杭州',
    introduction: '人潇洒，性温存，贼帅贼帅',
    personalWebsite: '',
    phone: '182****3576',
    registrationDate: '2023-05-10 12:10:00',
    accountId: '1823576',
    certification: 1,
    role,
  });
});

// 登录
Mock.mock(new RegExp('/api/user/login'), (params: MockParams) => {
  const { username, password } = JSON.parse(params.body);
  if (!username) {
    return failResponse(null, '用户名不能为空', 5000);
  }
  if (!password) {
    return failResponse(null, '密码不能为空', 5000);
  }
  if (username === 'admin' && password === 'admin') {
    window.localStorage.setItem('userRole', 'admin');
    return successResponse({
      token: '12345',
    });
  }
  if (username === 'user' && password === 'user') {
    window.localStorage.setItem('userRole', 'user');
    return successResponse({
      token: '54321',
    });
  }
  return failResponse(null, '账号或者密码错误', 5000);
});

// 登出
Mock.mock(new RegExp('/api/user/logout'), () => {
  return successResponse(null);
});
