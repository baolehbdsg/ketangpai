<template>
  <div>
    <div class="header">
      <div class="header-left">
        <span class="header-icon" @click="jumpToHomework"><i class="iconfont iconfanhui" style="font-size:38px;color:#5F6368;"></i></span>
        <span class="courseName" @click="jumpToHomework">{{ courseName}}</span>
      </div>
      <div class="header-center">
        <span @click="jumpToClassmate">同学</span>
        <span>学生分组</span>
        <span>成绩</span>
      </div>
      <div class="header-right">
        <span><i class="iconfont iconxiaoxi1" style="font-size: 32px;color: #5F6368;"></i></span>
        <span><img src="../../assets/picture/33 (1).png" style="width:30px;height:30px"></span>
      </div>
    </div>
    <div class="GWidth">
      <div class="perform-group-title">
        <div class="title" >
          <a class="totals" data-area="totalgrade-Area" tabindex="1">总成绩</a>
          <a class="attences active" data-area="attence-Area" tabindex="1">考勤</a>
          <a class="performs" data-area="perform-Area"tabindex="1">表现</a>
          <a class="homeworks" data-area="homework-Area" tabindex="1">作业</a>
          <a class="tests" data-area="test-Area" tabindex="1">测试成绩</a>
          <a class="regulars" data-area="regular-Area" tabindex="1">平时成绩</a>
          <a class="finals" data-area="final-Area" tabindex="1">期末成绩</a>
        </div>
        <div class="gradePage">
          <div class="total-box">
            <h2>作业成绩</h2>
            <p>
              <span>已批 {{ checkedCount }}</span>
              <span>未批  {{ unCheckCount}}</span>
              <span>未交 {{ parseInt(homeworkList.length) - parseInt(checkedCount) - parseInt(unCheckCount)}}</span>
            </p>
          </div>

          <div class="scoreList" v-for="(item,index) in homeworkList">
            <span>{{ item.publishTime }}</span>&nbsp&nbsp&nbsp&nbsp
            <span style="width: 150px;color: #2d2d2d;">{{ item.homeworkName }}</span>&nbsp&nbsp&nbsp&nbsp
            <span v-if="item.score == null">____/{{item.bestScore}}</span>
            <span v-else>{{ item.score}}/{{item.bestScore}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SGrade',
  data(){
    return{
      homeworkList:[],
      unCheckCount:'',
      checkedCount:'',
      unsubmitCount:'',
      courseName:''
    }
  },
  mounted(){
    this.getAllHomework();
    this.getUncheckCount();
    this.getCheckedCount();
    // this.getUnSubmitCount();
    this.getCourseName();
  },
  methods:{
    getCourseName(){
      let courseId = sessionStorage.getItem("courseId");
      this.$axios.get('api/course/getCourseById?id='+courseId)
        .then(res =>{
          this.courseName = res.data.courseName;
        })
    },
    //获取未交作业数量
    //获取已批改作业数量
    getCheckedCount(){
      let userId = sessionStorage.getItem("userId");
      let courseId = sessionStorage.getItem("courseId");
      const params = {
        userId:userId,
        courseId:courseId
      };
      this.$axios.post('api/grade/getCheckedCount',params)
        .then(res =>{
          this.checkedCount = res.data;
        })
    },
    //获取未批改作业数量
    getUncheckCount(){
      let userId = sessionStorage.getItem("userId");
      let courseId = sessionStorage.getItem("courseId");
      const params = {
        userId:userId,
        courseId:courseId
      };
      this.$axios.post('api/grade/getUncheckCount',params)
        .then(res =>{
          this.unCheckCount = res.data;
        })
    },
    //获取所有作业
    getAllHomework(){
      let userId = sessionStorage.getItem("userId");
      let courseId = sessionStorage.getItem("courseId");
      const params = {
        userId:userId,
        courseId:courseId
      };
      this.$axios.post('api/homework/getAllHomework',params)
        .then(res=>{
          this.homeworkList = res.data;
          console.log(res.data);
        })
    },
    //跳转到同学页面
    jumpToClassmate(){
      this.$router.push({name:'SClassmate'});
    },
    //跳转到作业页面
    jumpToHomework(){
      this.$router.push({name:'SHomework'});
    }
  }
}
</script>

<style scoped>
@import url('../../assets/file/iconfont.css');
.header{
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.04);
  background: none repeat scroll 0% 0% #fff;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: 45px;
}
.header-icon{
  cursor: pointer;
}
.courseName{
  background: #2c58ab;
  color: white;
  padding: 6px 20px;
  border-radius: 16px;
  font-size: 14px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  position: relative;
  bottom: 16px;
  right: 45px;
  cursor: pointer;
}
.header-left{
  position: relative;
    left: 50px;
}
.header-right{
  position: relative;
    right: 100px;

}
.header-center span{
  height: 74px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(59,61,69,1);
  padding-bottom: 20px;
  cursor: pointer;

}
.header-center span:hover{
  border-bottom: 4px solid #2C58AB;
}
.GWidth{
  width: 980px;
  margin: 30px auto;
}
.perform-group-title {
  height: 42px;
    color: #000;
    /* background: #fff; */
    padding: 20px 0 20px 1px;
    border: 1px solid #c8c8c8;
    border-bottom-color: #dcdcdc;
    /*text-align: center;*/
    /* font-size: 0; */
}
.perform-group-title a{
      font-size: 14px;
    color: #2d2d2d;
    padding: 10px 38px;
    position: relative;
    top: 7px;
    cursor: pointer;
    height: 40px;
}
.perform-group-title a:hover{
  color: #328eeb;
}
.perform-group-title a:focus{
  background: #328eeb;
  color: white;
}
.title{
  border: 1px solid #c8c8c8;;
    margin-top: 11px;
    height: 38px;
    width: 900px;
    margin: auto;
}
.gradePage{
  height: 517px;
    width: 978px;
    /*margin: 23px auto;*/
    border: 1px solid #c8c8c8;
    border-top: none;
    min-height: 516px;
    position: relative;
    right: 2px;
}
.total-box {
  display: inline-block;
  vertical-align: top;
  width: 39%;
  margin-top: 40px;
  margin-left: 55px;
}
.total-box h2 {
  font-weight: 400;
  font-size: 22px;
  line-height: 1;
  padding-bottom: 5px;
}
.total-box span {
  font-size: 14px;
  color: #aaa;
  padding-right: 10px;
}
  .scoreList{
    width: 478px;
    margin-left: 500px;
    /* margin-bottom: 50px; */
    position: relative;
    top: -35px;
    color: #aaa;
  }
  .scoreList span{
    line-height: 50px;
  }
</style>

