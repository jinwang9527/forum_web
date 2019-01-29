<template>
  <b-form :form="form"></b-form>
</template>

<script>
  import BaseVue from '../../components/BaseComponents/BaseVue'
  import BForm from '../../components/BaseComponents/element/BForm'
  export default {
    name: 'personaLinformation',
    extends: BaseVue,
    components: { BForm },
    mounted() {
    },
    data() {
      return {
        pkCustomerId: null,
        form: {
          api: '',
          title: '个人信息',
          labelWidth: '140px',
          model: {},
          formItems: [
            { name: 'name', label: '姓名', required: true,},
            { name: 'nickName', label: '昵称', required: true, },
            { name: 'account', label: '账号', required: true, },
            { name: 'password', label: '密码', required: true, },
            { name: 'sex', label: '性别', required: true, },
            { name: 'birthday', label: '出生日期' ,formatter:'date' },
            { name: 'telephone', label: '手机号码', required: true , validator:'phone'},
            { name: 'qq', label: 'QQ号' },
            { name: 'totalTotal', label: '帖子数',},
            { name: 'dynamicTotal', label: '动态数'},
            { name: 'createTime', label: '创建时间' ,formatter:'date' },
            { name: 'headerImage', label: '头像',type:'image' },

          ],
          operations: [
            { name: '保存', type: 'primary', click: 'OnSave' },
            { name: '重置', click: 'Reset' }
          ]
        },
      }
    },
    methods: {


    }
  }
</script>

<style scoped>

</style>
