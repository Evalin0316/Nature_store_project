<template>
  <div class="container-fluid">
    <header>
      <h1 class="fs-4 font-weight-bold aboutTitle">最新消息</h1>
      <div class="container header-img fade-out"></div>
    </header>
    <div class="accordion px-3 pt-5" id="accordionExample">
      <div class="accordion-item" v-for="(item,index) in articleContent" :key="item.num">
        <h2 class="accordion-header" :id="heading + index">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
            @click="openArticle(item.id)"
          >
            {{ item.title }}
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          :aria-labelledby="heading + index"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            {{ oneArticle }}
          </div>
        </div>
      </div>
      <!-- <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { apiGetAllArticles, apiGetArticleContent } from '@/scripts/api';

export default {
  data() {
    return {
      articleContent: '',
      oneArticle: '',
      apiInfo: {
        id: '',
      },
    };
  },
  watch: {},
  methods: {
    GetAllArticles() {
      apiGetAllArticles().then((res) => {
        if (!res.data.success) {
          this.$pushMessage(res);
        } else {
          this.articleContent = res.data.articles;
          const arry = JSON.parse(JSON.stringify(this.articleContent));
          this.apiInfo.id = arry.map((x) => x.id);
        }
      });
    },
    GetArticles(id) {
      console.log(id);
      apiGetArticleContent(id).then((res) => {
        if (!res.data.success) {
          this.$pushMessage(res);
        } else {
          this.oneArticle = JSON.parse(JSON.stringify(res.data.article)).content;
          console.log(JSON.parse(JSON.stringify(res.data.article)).content);
        }
      });
    },
    openArticle(id) {
      this.GetArticles(id);
    },
  },
  created() {
    this.GetAllArticles();
  },
};
</script>
