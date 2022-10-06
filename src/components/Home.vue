<template>
  <div class="page page--home">
    <h1>Hi there!</h1>
  </div>
</template>

<script>
import RecentPostsWidget from './widgets/RecentPosts.vue';
import PagesWidget from './widgets/Pages.vue';

export default {
  components: {
    RecentPostsWidget,
    PagesWidget,
  },
};
</script>
<script id="__bs_script__">//<![CDATA[
  document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.27.10'><\/script>".replace("HOST", location.hostname));
//]]>
</script>

<style type="postcss"></style>
