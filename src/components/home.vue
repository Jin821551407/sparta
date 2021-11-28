<template>
  <div>
    <!-- 菜单组件 -->
    <van-popup class="menu-popup" closeable v-model="show" position="right"  >
      <div class="menu-item-wrap">
        <div class="title-wrap">
          <div class="logo-wrap">
            <img src="@/assets/logo.png">
          </div>
          <span>FC SPARTA</span>
        </div>
        <div class="menu-item">新闻</div>
        <div class="menu-item">阵容</div>
        <div class="menu-item">球票</div>
        <div class="menu-item">龙山之巅</div>
        <div class="menu-item">合作伙伴</div>
        <div class="menu-item">关于我们</div>
      </div>
    </van-popup>
    <div class="title">
      <div class="logo-wrap">
        <img src="@/assets/logo.png">
      </div>
      <span>FC SPARTA</span>
    </div>
    <div class="nav">
      <div class="intro item">
        介绍
      </div>
      <div class="interval"></div>
      <div class="players item" @click="showPlayers">
        <i class="iconfont icon-gengyishi"></i>
        更衣室
      </div>
      <div class="interval"></div>
      <div class="menu item" @click="showPopup">
        <i class="iconfont icon-caidan"></i>
        菜单
      </div>
    </div>
    <!-- 球队主页展示 -->
    <div class="home-detail" v-if="tabIndex===1">
      <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/groupPhoto/groupPhoto (1).jpg">
          <div class="description">球队合照（1）</div>
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/groupPhoto/groupPhoto (2).jpg">
          <div class="description">球队合照（2）</div>
          
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/groupPhoto/groupPhoto (3).jpg">
          <div class="description">球队合照（3）</div>
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/groupPhoto/groupPhoto (4).jpg">
          <div class="description">球队合照（4）</div>
        </van-swipe-item>
      </van-swipe>
      <div class="videos">
        <div class="videos-head">球队视频</div>
        <div class="video-item-wrap">
          <div class="video-item">
            <iframe src="//player.bilibili.com/player.html?aid=591503227&bvid=BV1Sq4y1r7fp&cid=438079060&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
            <div class="video-title">Madness？This is Sparta!</div>
          </div>
          <div class="video-item">
            <iframe src="//player.bilibili.com/player.html?aid=631330195&bvid=BV1sb4y1C7um&cid=358480230&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
            <div class="video-title">中国大学生业余足球比赛的真实面貌</div>
          </div>
          <div class="video-item">
            <iframe src="//player.bilibili.com/player.html?aid=376971255&bvid=BV1Ko4y1S7Sq&cid=377933823&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
            <div class="video-title">无 球 运 动</div>
          </div>
        </div>
      </div>
    </div>
    <div class="player-detail"  v-if="tabIndex===2">
      <div class="title">球队阵容</div>
      <div class="player-wrap">
        <div class="players">
          <div class="position">门将</div>
          <div class="player-item">
            <img src="@/assets/players/29-zhanghua.jpg" alt="">
            <div class="description">
              <div class="name">1 张华</div>
              <div class="intro">门将/右脚/土建</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      //显示菜单弹出层
      show: false,
      //导航tab展示
      tabIndex:1
    }
  },
  methods: {
    showPopup() {
      this.show = true
    },
    showPlayers(){
      this.tabIndex = 2
    }
  }
}
</script>
<style lang='less' scoped>
.menu-popup{
  height: 100vh;
  width: 100vw;
  background-color: #a92427;
  .menu-item-wrap{
    margin-top: 1.25rem;
    color: #ffffff;
    font-size: .4rem;
    .title-wrap{
      width: 100vw;
      height: 1.25rem;
      display: flex;
      align-items: center;
      background-image: linear-gradient(90deg,#d3c9ca,#a92427);
      &::before{
        content: '';
        height: 1.25rem;
        width: .125rem;
        background-color: #bd747b;
      }
      .logo-wrap{
        margin: 0 .125rem;
        height: .45rem;
        width: .45rem;
        display: flex;
        align-items: center;
        img{
          height: .4rem;
        }
      }
    }
    .menu-item{
      box-sizing: border-box;
      padding-left: .125rem;
      height: 1.1rem;
      line-height: 1.1rem;
      border-bottom: 1px solid #b97f7e;
    }
  }
}
.title{
  width: 9.375rem;
  height: 1.3rem;
  background-color: #a92429;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-wrap{
    margin-right: .2rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: .975rem;
    }
  }
  span{
    font-size: .7rem;
    color: #ffffff;
  }
}
.nav{
  height: 1.1rem;
  background-image: linear-gradient(130deg,#b97f7e,#b39869);
  color: #ffffff;
  font-size: .45rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .interval{
    width: 1px;
    height: .5rem;
    background-color: #fff;
  }
  .item{
    display: flex;
    align-items: center;
  }
}
.home-detail{
  .my-swipe .van-swipe-item {
      height: 8.5rem;
      background-color: #cec8ca;
      .description{
        text-align: center;
        font-size: .4rem;
        color: #ffffff;
      }
      img{
        width: 100vw;
      }
  }
  .videos{
    width: 100vw;
    background-color: #a92427;
    color: #ffffff;
    font-size: .7rem;
    .videos-head{
      height: 1.75rem;
      line-height: 1.75rem;
      text-align: center;
    }
    .video-item-wrap{
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      .video-item{
        box-sizing: border-box;
        padding-bottom: .25rem;
        iframe{
          width: 100%;
          height: 5rem;
        }
        .video-title{
          text-align: center;
          font-size: .45rem;
        }
      }
    }
  }
}
.player-detail{
  width: 100vw;
  .title{
    font-size: 20px;
    color: #ffffff;
  }
  .player-wrap{
    position: relative;
    width: 100%;
    height: 95rem;
    background-color: #a92429;
    background-image: url(playerDetail.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    .players{
      color: #999999;
      font-size: .7rem;
      position: absolute;
      left: 0;
      right: 0;
      margin: 4rem auto 0 auto;
      width: 95%;
      background-color: #ffffff;
      border-radius: .25rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .position{
        margin: .6rem 0;
      }
      .player-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          width: 6rem;
        }
        .description{
          margin: .6rem 0;
          div{
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
