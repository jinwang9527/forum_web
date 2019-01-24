<template>
  <table-view :tabs="tableView.tabs"
              :table="tableView.table"
              :resources="tableView.resources"
              :buttons="tableView.buttons"
              :searchCondition="tableView.searchCondition">
  </table-view>
</template>

<script>

  import BaseVue from '../../components/BaseComponents/BaseVue'
  import TableView from '../../components/BaseComponents/view/TableView'

  export default {
    name: 'MyTeam',
    extends: BaseVue,
    components: { TableView },
    created() {
    },
    data() {
      return {
        tableView: {
          tabs: [
            { name: '所有成员', prop: '', value: '', isDefault: true }
          ],
          searchCondition: {
            labelWidth: '100px',
            content: [
              { prop: 'code', label: '合伙人编号' },
              { prop: 'name', label: '姓名' },
              { prop: 'sex', label: '性别' },
              { prop: 'telephone', label: '手机号码' },
              { prop: 'createTime', label: '创建时间', type: 'time' }
            ]
          },
          table: {
            content: [
              { prop: 'code', label: '合伙人编号' },
              { prop: 'name', label: '姓名' },
              { prop: 'sex', label: '性别' },
              { prop: 'telephone', label: '手机号码' },
              { prop: 'birthday', label: '出生日期' },
              { prop: 'company', label: '公司' },
              { prop: 'position', label: '职位' },
              { prop: 'level', label: '合伙人等级', table: 'employee'},
              { prop: 'employeeName', label: '介绍人' },
              { prop: 'clientRegisterTotal', label: '客户注册数' },
              { prop: 'createTime', label: '创建时间', type: 'time' }
            ],
            enums: ['employee'],
            operations: [
              { name: '查看详情',  }
            ]
          },

          buttons: [
            { name: '添加成员', icon: 'el-icon-upload', },
            { name: '我的二维码', icon: 'el-icon-upload',  },
          ],
          resources: {
            api: '',
            refresh: 0,
            parameters: {
              isDel: false
            }
          }
        }

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
</style>
