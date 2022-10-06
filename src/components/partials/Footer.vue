<template>
  <footer id="footer" class="site-footer l-ft">
    <div class="l-ft-inn">
      <div class="l-ft-inn-fl d-fl">
        <div class="address d-fl">
          <h3>ADDRESS</h3>
          <div class="address-details">
            <p class="ft-name">株式会社TWIN PLANET ENTERTAINMENT</p>
            <p class="address-list">
              <span>〒150-0001</span>
              <span>東京都渋谷区神宮前5-46-1（本社）</span>
              <span>東京都渋谷区神宮前5-3-13（受付）</span>
              <span>(※表参道交差点、A1出口より徒歩４分)</span>
            </p>
          </div>
        </div>
        <div class="contact d-fl">
          <h3>CONTACT</h3>
          <div class="contact-details">
            <p class="contact-list">
              <span>TEL ：0357663811</span>
              <span>FAX ：0357663818</span>
              <span>MAL ：info@twinplanet.co.jp</span>
            </p>
          </div>
        </div>
      </div>
      <div class="l-ft-inn-copyright">
        <div class="l-ft-inn-logo">
          <h1>
            <router-link :to="{name: 'Home'}" rel="canonical">
              <img :src="require('../../assets/img/ft-logo.svg')" alt="logo">
            </router-link>
          </h1>
        </div>
        <p class="l-ft-inn-copyright-text">Copyright c TWIN PLANET ENTERTAINMENT Co., Ltd. <br class="sp" />All Rights
          Reserved.</p>
      </div>
    </div>
  </footer><!-- #footer -->
</template>

<style type="postcss" scoped></style>
