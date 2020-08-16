<template>
  <div>
    <el-card>
      <div slot="header">
        <div class="cardName">数据表管理</div>
      </div>
      <el-form :inline="true" :model="searchParam">
        <!-- <el-form-item label="控制名称">
          <el-input v-model="searchParam.nickName" placeholder="请输入" clearable></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="searchParam.type" placeholder="请选择" clearable>
            <el-option
              v-for="item in typeList"
              :key="item.code"
              :label="item.desc"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关联数据点">
          <el-select v-model="searchParam.dpId" placeholder="请选择" clearable>
            <el-option
              v-for="item in dpList"
              :key="item.id"
              :label="item.nickName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>-->
        <el-form-item>
          <!-- <el-button type="primary" @click="search()">搜索</el-button> -->
          <el-button type="primary" @click="showUpdateDialog()">添加</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{background:'#FAFAFA'}"
        stripe
        height="60rem"
      >
        <el-table-column prop="id" label="编号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="数据表名" show-overflow-tooltip></el-table-column>
        <el-table-column label="状态" show-overflow-tooltip>
          <template slot-scope="scope">
            <div>{{scope.row.status===1?'启用':'不启用'}}</div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="changeStatus(scope.row,0)"
              v-if="scope.row.status===1"
            >不启用</el-button>
            <el-button type="text" size="small" @click="changeStatus(scope.row,1)" v-else>启用</el-button>
            <el-button type="text" size="small" @click="seeHistory(scope.row)">查看记录</el-button>

            <el-button type="text" size="small" @click="showUpdateDialog(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <div class="paging">
        <el-pagination
          background
          layout="total,prev, pager, next,jumper"
          :page-size="pageMsg.size"
          :current-page="pageMsg.page"
          :total="pageMsg.total"
          @current-change="pageChange"
        ></el-pagination>
      </div>-->
    </el-card>
    <el-dialog :title="updateParam | dialogTitle" :visible.sync="dialogFlag" width="26%">
      <el-form :model="updateParam" :rules="rules" ref="updateForm" label-width="12rem">
        <el-form-item label="数据表名" prop="name">
          <el-input v-model="updateParam.name" placeholder="请输入" clearable style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="关联数据点" prop="dpIds">
          <el-select v-model="updateParam.dpIds" placeholder="请选择" multiple clearable>
            <el-option
              v-for="item in dpList"
              :key="item.id"
              :label="item.nickName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="状态" prop="status">
          <el-select v-model="updateParam.status" placeholder="请选择" clearable>
            <el-option
              v-for="item in statusList"
              :key="item.code"
              :label="item.desc"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>-->
        <el-form-item label="周期(s)" prop="timeSpan">
          <el-input
            v-model.number="updateParam.timeSpan"
            placeholder="请输入"
            clearable
            style="width:80%"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFlag = false">取消</el-button>
        <el-button type="primary" @click="update">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: null,
      pageMsg: {},
      param: {
        page: 1,
        size: 10
      },
      searchParam: {
        nickName: null,
        dpId: null,
        type: null
      },
      dialogFlag: false,
      updateParam: {
        id: null,
        name: null,
        dpIds: null,
        status: true,
        timeSpan: null
      },
      statusList: [
        { code: 1, desc: "启用" },
        { code: 0, desc: "不启用" }
      ],
      dpList: []
    };
  },
  computed: {
    rules() {
      return {
        name: [{ required: true, message: "请输入", trigger: "blur" }],
        timeSpan: [{ required: true, message: "请输入", trigger: "blur" }],
        dpIds: [{ required: true, message: "请选择", trigger: "change" }],
        status: [{ required: true, message: "请选择", trigger: "change" }]
      };
    }
  },
  methods: {
    // 获取表格数据
    getList() {
      this.$axios
        .post(
          this.$url.getTableList + "?boxSn=" + this.$store.state.boxInfo.boxSn
        )
        .then(res => {
          if (res.data.success) {
            // this.pageMsg = res.data.data;
            // this.tableData = res.data.data.content;
            this.tableData = res.data.data;
          } else {
            this.$message.error("获取表格数据失败,原因:" + res.data.msg);
          }
        });
    },
    // 点击搜索时,把serachParam的数据复给param,然后重新getList()
    search() {
      this.param.page = 1;
      this.param = { ...this.param, ...this.searchParam };
      this.getList();
    },
    // 页数变化
    pageChange(val) {
      this.param.page = val;
      this.getList();
    },
    // 删除
    handleDelete(row) {
      this.$confirm("删除确认", "删除提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios.delete(this.$url.deleteTable + "/" + row.id).then(res => {
            if (res.data.success) {
              this.getList();
              this.$message.success(`删除成功`);
            } else {
              this.$message.error(`删除失败：${res.data.msg}`);
            }
          });
        })
        .catch(() => {
          this.$message.info("取消");
        });
    },
    // 打开增加更新模态框
    showUpdateDialog(arg) {
      this.dialogFlag = true;
      if (arg) {
        this.updateParam = { ...arg };
        this.updateParam.dpIds = this.updateParam.dpIds.split(",");
      } else {
        this.updateParam = {
          id: null,
          name: null,
          dpIds: null,
          //   status: null,
          timeSpan: null
        };
      }
    },
    // 更新
    update() {
      this.$refs.updateForm.validate(valid => {
        if (valid) {
          let url = this.updateParam.id
            ? this.$url.updateTable
            : this.$url.addTable;
          let param = { ...this.updateParam };
          param.dpIds = param.dpIds.join(",");
          this.$axios.post(url, param).then(res => {
            if (res.data.success) {
              this.$message.success(`操作成功`);
              this.dialogFlag = false;
              this.getList();
            } else {
              this.$message.error(`操作失败,原因:${res.data.msg}`);
            }
          });
        } else {
          return false;
        }
      });
    },
    getDpList(param = {}) {
      this.$axios
        .get(
          this.$url.getDpList + "?boxSn=" + this.$store.state.boxInfo.boxSn,
          param
        )
        .then(res => {
          if (res.data.success) {
            this.dpList = res.data.data;
          } else {
            this.$message.error(`获取设备列表失败,原因:${res.data.msg}`);
          }
        });
    },
    // 开关
    changeStatus(table, val) {
      this.$axios
        .get(
          this.$url.changeTableStatus +
            "?" +
            this.$qs.stringify({ tableId: table.id, status: val })
        )
        .then(res => {
          if (res.data.success) {
            this.$message.success(`操作成功`);
          } else {
            this.$message.error(`操作失败,原因:${res.data.msg}`);
          }
        });
    },
    seeHistory(item) {
      this.$router.push({
        path: "tableHistory",
        query: { item: JSON.stringify(item) }
      });
    },
  },
  mounted() {
    this.getList();
    this.getDpList();
  }
};
</script>
<style lang="scss" scoped>
</style>
