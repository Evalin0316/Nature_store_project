<template>
  <div class="container-fluid">
    <header>
      <h1 class="fs-4 font-weight-bold aboutTitle">最新消息</h1>
      <div class="container header-img fade-out"></div>
    </header>
    <div class="accordion px-3 pt-5" id="accordionExample">
      <div class="accordion-item" v-for="(item,index) in articleContent" :key="index">
        <h2 class="accordion-header" :id="'flush-heading'+index">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#flush-collapse'+index"
            aria-expanded="false"
            :aria-controls="'flush-collapse-'+index"
            @click="openArticle(item.id)"
          >
            {{ item.title }}
          </button>
        </h2>
        <div
          :id="'flush-collapse'+index"
          class="accordion-collapse collapse show"
          :aria-labelledby="'flush-heading'+index"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            {{ oneArticle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiGetAllArticles, apiGetArticleContent } from '@/scripts/api';

export default {
  emits: ['page-loading'],
  data() {
    return {
      articleContent: '',
      oneArticle: '',
      apiInfo: {
        id: '',
      },
      show: '',
    };
  },
  watch: {},
  methods: {
    GetAllArticles() { // 取得文章列表
      apiGetAllArticles().then((res) => {
        if (!res.data.success) {
          this.$pushMessage(res);
        } else {
          this.articleContent = res.data.articles;
          const arry = JSON.parse(JSON.stringify(this.articleContent));
          this.apiInfo.id = arry.map((x) => x.id);
        }
        this.$emitter.emit('page-loading', false);
      });
    },
    GetArticles(id) { // 取得單一文章內文
      console.log(id);
      apiGetArticleContent(id).then((res) => {
        if (!res.data.success) {
          this.$pushMessage(res);
        } else {
          this.oneArticle = JSON.parse(JSON.stringify(res.data.article)).content;
        }
      });
    },
    openArticle(id) {
      this.show = id;
      this.GetArticles(id);
    },
  },
  created() {
    this.GetAllArticles();
    this.$emitter.emit('page-loading', true);
  },
};
</script>
