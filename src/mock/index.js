import Mock from 'mockjs'
import decision from './decision'

Mock.mock(/\/decision\/getName/,'post',decision.getName)
Mock.mock('/list', { //输出数据
    'name': '@name', //随机生成姓名
    'age|10-20': 10
    //还可以自定义其他数据
});