<template>
  <b-form :form="form"></b-form>
</template>

<script>
  import BaseVue from '../../components/BaseComponents/BaseVue'
  import BForm from '../../components/BaseComponents/element/BForm'
  export default {
    name: 'ClientDetail',
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
            { name: 'name', label: '客户姓名', required: true },
            { name: 'telephone', label: '手机号码', required: true , validator:'phone'},
            { name: 'qq', label: 'QQ号' },
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
