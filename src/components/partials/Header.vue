<template>
  <header id="masthead" class="site-header l-hd">
      <div class="l-hd-inn">
        <div class="l-hd-inn-fl d-fl">
          <div class="l-hd-inn-logo">
            <h1>
              <router-link :to="{name: 'Home'}"><img :src="require('../../assets/img/hd-logo.svg')" alt="logo" /></router-link>
            </h1>
          </div>
          <div class="l-hd-inn-logo-text pc">
            <span>TWIN PLANET ENTERTAINMENT</span>
          </div>

        </div>
        <div class="l-hd-nav-menu sp">
          <div class="l-hd-nav-menu-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="l-hd-nav-list">
            <ul class="l-hd-nav-list-inner">
              <li>
                <router-link :to="{name: 'Home'}">HOME</router-link>
              </li>
              <li>
                <a href="<?php echo esc_html( home_url('/') ) ?>news">NEWS</a>
              </li>
              <li>
                <a href="<?php echo esc_html( home_url('/') ) ?>topics">TOPICS</a>
              </li>
              <li>
                <a href="<?php echo esc_html( home_url('/') ) ?>talent">TALENT</a>
              </li>
              <li>
                <a href="<?php echo esc_html( home_url('/') ) ?>schedule">SCHEDULE</a>
              </li>
              <li>
                <a href="<?php echo esc_html( home_url('/') ) ?>company">COMPANY</a>
              </li>
              <li>
                <a href="<?php echo esc_html( home_url('/') ) ?>contact1">CONTACT</a>
                <div class="nav-submenu">
                  <ul class="d-fl">
                    <li><a href="<?php echo esc_html( home_url('/') ) ?>contact1">CONTACT US</a></li>
                    <li><a href="<?php echo esc_html( home_url('/') ) ?>contact1">AUDITION</a></li>
                    <li><a href="<?php echo esc_html( home_url('/') ) ?>contact1">RECRUIT</a></li>
                  </ul>
                </div>
              </li>
            </ul>
            <div class="menu-copyright">
              <p>Copyright c TWIN PLANET ENTERTAINMENT Co., Ltd.<br />All Rights Reserved.</p>
            </div>
          </div>

        </div>
      </div>
      <nav>
        <div class="l-hd-nav-menu pc">
          <div class="l-hd-nav-menu-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="l-hd-nav-list">
            <div class="nav-logo d-fl">
              <h1>
                <a href="/"><img :src="require('../../assets/img/hd-logo.svg')" alt="logo"></a>
              </h1>
              <span>TWIN PLANET ENTERTAINMENT</span>
            </div>
            <ul class="l-hd-nav-list-inner">
              <li>
                <a href="<?php echo esc_html( home_url('/') ) ?>">HOME</a>
              </li>
              <li>
                <a href="<?php echo esc_html( home_url('/') ) ?>news">NEWS</a>
              </li>
              <li>
                <a href="<?php echo esc_html( home_url('/') ) ?>topics">TOPICS</a>
              </li>
              <li>
                <a href="<?php echo esc_html( home_url('/') ) ?>talent">TALENT</a>
              </li>
              <li>
                <a href="<?php echo esc_html( home_url('/') ) ?>schedule">SCHEDULE</a>
              </li>
              <li>
                <a href="<?php echo esc_html( home_url('/') ) ?>company">COMPANY</a>
              </li>
              <li>
                <a href="<?php echo esc_html( home_url('/') ) ?>contact1">CONTACT</a>
                <div class="nav-submenu">
                  <ul class="d-fl">
                    <li><a href="<?php echo esc_html( home_url('/') ) ?>contact1">CONTACT US</a></li>
                    <li><a href="<?php echo esc_html( home_url('/') ) ?>contact1">AUDITION</a></li>
                    <li><a href="<?php echo esc_html( home_url('/') ) ?>contact1">RECRUIT</a></li>
                  </ul>
                </div>
              </li>
            </ul>
            <div class="menu-copyright">
              <p>Copyright c TWIN PLANET ENTERTAINMENT Co., Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>

</script>
