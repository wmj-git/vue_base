import Vue from 'vue'
Vue.filter('myFilter',function (val,arg) {
  return arg+val.split('').reverse().join('');
})

