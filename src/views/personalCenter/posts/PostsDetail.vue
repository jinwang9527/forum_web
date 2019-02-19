<template>
  <div>
    <div>


      <!--评论弹窗-->
      <el-dialog
        title="请输入评论内容"
        :visible.sync="dialogVisible"
        width="25%"
        :before-close="handleClose">

        <el-form>
          <el-form-item>
            <el-input v-model="form.name" type="textarea"></el-input>
          </el-form-item>

        </el-form>


        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>

      </el-dialog>


      <b-form :form="form"></b-form>
      <table-view :tabs="tableView.tabs"
                  :table="tableView.table"
                  :resources="tableView.resources"
                  :buttons="tableView.buttons"
                  :searchCondition="tableView.searchCondition"
      >
      </table-view>

    </div>
  </div>


</template>


<script>
  import BForm from '../../../components/BaseComponents/element/BForm'
  import TableView from '../../../components/BaseComponents/view/TableView'
  import BaseVue from '../../../components/BaseComponents/BaseVue'
  import {selectPosts} from '../../../api/myPosts/index'
  import BScroll from 'better-scroll'

  export default {
    name: 'myPosts',
    extends: BaseVue,
    components: {TableView, BForm},
    data() {
      return {
        dialogVisible: false,
        form: {
          api: '',
          title: '帖子详情',
          labelWidth: '140px',
          model: {},
          formItems: [
            {name: 'postsTitle', label: '帖子标题', required: true, type: 'normal'},
            {name: 'postsContent', label: '帖子内容', required: true, type: 'normal'},
          ],
        },
        tableView: {
          tabs: [
            {name: '评论', prop: 'myPosts', value: "myPosts", isDefault: true},
          ],
          buttons: [
            {type: 'primary', name: '我要评论', click: this.goToAddPosts}
          ],
          table: {

            border: false,
            content: [
              {prop: 'postsTitle', label: '帖子标题'},
              {prop: 'nickName', label: '创建人'},
              {prop: 'createTime', label: '创建时间', type: 'time'},
            ],
          },
          resources: {
            api: selectPosts,
            refresh: 0,
            parameters: {}
          }
        }
      }
    },
    created() {
      setInterval(this.showMarquee, 2000)
      this.selectPosts('All', 1, 999)
    },
    methods: {
      selectPosts(All, pageIndex, pageSize) {
        this.invokeApi(selectPosts, {
          All, pageIndex, pageSize
        }).then(response => {
          this.arr = response.data
        })
      },
      goToAddPosts() {
        this.dialogVisible = true
      },
      showMarquee: function () {
        this.animate = true;
        setTimeout(() => {
          this.marqueeList.push(this.marqueeList[0]);
          this.marqueeList.shift();
          this.animate = false;
        }, 500)
      },
    }

  }


</script>


<style scoped>
  .inner-container {
    animation: myMove 7s linear infinite;
    animation-fill-mode: forwards;

  }

  /*文字无缝滚动*/
  @keyframes myMove {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-150px);
    }

  }

</style>
