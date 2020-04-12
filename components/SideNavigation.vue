<template>
  <div ref="Side" class="SideNavigation" tabindex="-1">
    <header class="SideNavigation-Header">
      <v-icon
<<<<<<< HEAD
        class="SideNavigation-OpenIcon"
        :aria-label="$t('サイドメニュー項目を開く')"
        @click="$emit('openNavi', $event)"
      >
        mdi-menu
      </v-icon>
      <h1 class="SideNavigation-HeaderTitle">
        <nuxt-link :to="localePath('/')" class="SideNavigation-HeaderLink">
          <img
            class="SideNavigation-HeaderLogo"
            src="/logo.svg"
            :alt="$t('東京都')"
          />
          <div class="SideNavigation-HeaderText">
            {{ $t('menu/新型コロナウイルス感染症') }}<br />{{
              $t('menu/対策サイト')
            }}
          </div>
        </nuxt-link>
      </h1>
    </header>

    <div :class="['SideNavigation-Body', { '-opened': isNaviOpen }]">
      <v-icon
        class="SideNavigation-CloseIcon"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="$emit('closeNavi', $event)"
=======
        class="SideNavigation-HeadingIcon pc-none"
        :aria-label="$t('サイドメニュー項目を開く')"
        @click="openNavi"
      >
        mdi-menu
      </v-icon>
      <nuxt-link :to="localePath('/')" class="SideNavigation-HeadingLink">
        <div class="SideNavigation-Logo">
          <img src="/logo.png" :alt="$t('大阪府')" />
        </div>
        <h1 class="SideNavigation-Heading">
          {{ $t('新型コロナウイルス感染症') }}<br />{{ $t('対策サイト') }}
        </h1>
      </nuxt-link>
    </div>

    <div class="sp-none" :class="{ open: isNaviOpen }">
      <v-icon
        class="SideNavigation-ListContainerIcon pc-none"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="closeNavi"
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
      >
        mdi-close
      </v-icon>

<<<<<<< HEAD
      <nav class="SideNavigation-Menu">
        <div class="SideNavigation-Language">
          <div
            v-if="this.$i18n.locales.length > 1"
            class="SideNavigation-Language"
          >
            <label class="SideNavigation-LanguageLabel" for="LanguageSelector">
              {{ $t('多言語対応選択メニュー') }}
            </label>
            <LanguageSelector />
          </div>
        </div>
        <MenuList :items="items" @click="$emit('closeNavi', $event)" />
      </nav>

      <footer class="SideNavigation-Footer">
        <div class="SideNavigation-Social">
          <a
            href="https://line.me/R/ti/p/%40822sysfc"
            target="_blank"
            rel="noopener noreferrer"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/line.webp" type="image/webp" />
              <img src="/line.png" alt="LINE" />
            </picture>
          </a>
          <a
            href="https://twitter.com/tokyo_bousai"
            target="_blank"
            rel="noopener noreferrer"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/twitter.webp" type="image/webp" />
              <img src="/twitter.png" alt="Twitter" />
            </picture>
          </a>
=======
      <div class="SideNavigation-ListItemContainer">
        <div
          v-if="this.$i18n.locales.length > 1"
          class="SideNavigation-Language"
        >
          <label class="SideNavigation-LanguageLabel" for="LanguageSelector">
            {{ $t('多言語対応選択メニュー') }}
          </label>
          <LanguageSelector />
        </div>
      </div>

      <v-divider class="SideNavigation-Divider" />

      <v-list :flat="true">
        <v-container
          v-for="(item, i) in items"
          :key="i"
          class="SideNavigation-ListItemContainer"
          @click="closeNavi"
        >
          <ListItem :link="item.link" :icon="item.icon" :title="item.title" />
          <v-divider v-show="item.divider" class="SideNavigation-Divider" />
        </v-container>
      </v-list>
      <div class="SideNavigation-Footer">
        <small class="SideNavigation-Copyright" lang="en">
          Content on This Site is Licensed Under a
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
          <a
            rel="license"
            target="_blank"
<<<<<<< HEAD
            rel="noopener noreferrer"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/facebook.webp" type="image/webp" />
              <img src="/facebook.png" alt="Facebook" />
            </picture>
          </a>
          <a
            href="https://github.com/tokyo-metropolitan-gov/covid19"
            target="_blank"
            rel="noopener noreferrer"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/github.webp" type="image/webp" />
              <img src="/github.png" alt="GitHub" />
            </picture>
          </a>
        </div>
        <small class="SideNavigation-Copyright">
          {{ $t('このサイトの内容物は') }}
          <a
            :href="$t('https://creativecommons.org/licenses/by/4.0/deed.ja')"
            target="_blank"
            rel="license"
            class="SideNavigation-LicenseLink"
          >
            {{ $t('クリエイティブ・コモンズ 表示 4.0 ライセンス') }}
          </a>
          {{ $t('の下に提供されています。') }}
          <br />
          2020 Tokyo Metropolitan Government
=======
            href="http://creativecommons.org/licenses/by/4.0/"
          >
            Creative Commons Attribution 4.0 International License </a
          ><br />
          2020 Osaka Prefectural Government × CODE for OSAKA
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
        </small>
      </footer>
    </div>
  </div>
</template>

<<<<<<< HEAD
<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import LanguageSelector from '@/components/LanguageSelector.vue'
import MenuList from '@/components/MenuList.vue'

type Item = {
  icon?: string
  title: TranslateResult
  link: string
  divider?: boolean
}
=======
<script>
import ListItem from '@/components/ListItem'
import LanguageSelector from '@/components/LanguageSelector.vue'
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e

export default Vue.extend({
  components: {
    LanguageSelector,
<<<<<<< HEAD
    MenuList
=======
    ListItem
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    items(): Item[] {
      return [
        {
          icon: 'mdi-chart-timeline-variant',
<<<<<<< HEAD
          title: this.$t('都内の最新感染動向'),
          link: this.localePath('/')
        },
        {
          icon: 'CovidIcon',
          title: this.$t('新型コロナウイルス感染症が心配なときに'),
          link: this.localePath('/flow'),
          divider: true
        },
        {
          icon: 'ParentIcon',
          title: this.$t('お子様をお持ちの皆様へ'),
          link: this.localePath('/parent')
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('都民の皆様へ'),
          link: 'https://www.metro.tokyo.lg.jp/tosei/tosei/news/2019-ncov.html'
        },
        {
          icon: 'mdi-domain',
          title: this.$t('企業の皆様・はたらく皆様へ'),
          link: this.localePath('/worker'),
          divider: true
        },
        {
          title: this.$t('東京都新型コロナウイルス感染症対策本部報'),
=======
          title: this.$t('府内の最新感染動向'),
          link: this.localePath('/')
        },
        {
          icon: 'covid',
          title: this.$t('新型コロナウイルス感染症について'),
          link: 'http://www.pref.osaka.lg.jp/iryo/osakakansensho/corona.html'
        },
        {
          icon: 'mdi-domain',
          title: this.$t('新型コロナウイルス感染症関連情報'),
          link: 'http://www.pref.osaka.lg.jp/kikaku/covid19info/index.html'
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('大阪府新型コロナウイルス対策本部'),
          link: 'http://www.pref.osaka.lg.jp/iryo/2019ncov/index.html',
          divider: true
        },
        {
          title: this.$t('知事からのメッセージ'),
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
          link:
            'http://www.pref.osaka.lg.jp/iryo/osakakansensho/corona_message.html'
        },
        {
<<<<<<< HEAD
          title: this.$t('東京都主催等 中止又は延期するイベント等'),
          link:
            'https://www.seisakukikaku.metro.tokyo.lg.jp/information/event00.html'
        },
        {
          title: this.$t('知事からのメッセージ'),
          link:
            'https://www.metro.tokyo.lg.jp/tosei/governor/governor/katsudo/2020/03/03_00.html'
        },
        {
          title: this.$t('当サイトについて'),
          link: this.localePath('/about')
        },
        {
          title: this.$t('お問い合わせ先一覧'),
          link: this.localePath('/contacts')
        },
        {
          title: this.$t('東京都公式ホームページ'),
          link: 'https://www.metro.tokyo.lg.jp/'
=======
          title: this.$t('当サイトについて'),
          link: this.localePath('/about')
        },
        {
          title: this.$t('大阪府公式ホームページ'),
          link: 'http://www.pref.osaka.lg.jp/',
          divider: true
        },
        {
          title: this.$t('大阪府公式Twitter'),
          link: 'https://twitter.com/osakaprefPR/'
        },
        {
          title: this.$t('大阪府公式Facebook'),
          link: 'https://www.facebook.com/osaka.pref'
        },
        {
          title: this.$t('大阪府公式LINE'),
          link: 'https://lin.ee/8IJ5WMv'
        },
        {
          title: this.$t('おおさか防災ネットTwitter'),
          link: 'https://twitter.com/osaka_bousai',
          divider: true
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
        }
      ]
    }
  },
  watch: {
    $route: 'handleChageRoute'
  },
  methods: {
    handleChageRoute() {
      // nuxt-link で遷移するとフォーカスが残り続けるので $route を監視して SideNavigation にフォーカスする
      return this.$nextTick().then(() => {
        const $Side = this.$refs.Side as HTMLEmbedElement | undefined
        if ($Side) {
          $Side.focus()
        }
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  @include lessThan($small) {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    outline: 1px dotted $gray-3;
  }
}

.SideNavigation-Header {
  height: 64px;
  padding-left: 52px;
  @include largerThan($small) {
    height: auto;
    padding: 20px;
  }
  @include lessThan($small) {
    display: flex;
  }
  @include lessThan($tiny) {
    padding-left: 44px;
  }
}

.SideNavigation-OpenIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-CloseIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-HeaderTitle {
  width: 100%;
  font-size: 13px;
  color: #707070;
  @include largerThan($small) {
    margin: 0;
    margin-top: 10px;
  }
}

.SideNavigation-HeaderLink {
  display: flex;
  align-items: center;
  padding-right: 10px;
  @include lessThan($small) {
    height: 64px;
  }
  @include lessThan($tiny) {
    justify-content: space-between;
  }
  &:link,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    font-weight: bold;
  }

  &:focus {
    outline: dotted $gray-3 1px;
  }

  @include largerThan($small) {
    display: block;
    padding: 15px 0;
  }
}

.SideNavigation-HeaderLogo {
  @include lessThan($tiny) {
    width: 100px;
  }
}

<<<<<<< HEAD
.SideNavigation-HeaderText {
  margin: 10px 0 0 0;
=======
.SideNavigation-Menu {
  @include lessThan($small) {
    padding-top: 50px;
  }
}

.SideNavigation-LanguageLabel {
  display: block;
  margin-bottom: 5px;
  font-size: 0.85rem;
}

.open {
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
  @include lessThan($small) {
    margin: 0 0 0 10px;
  }

  @include lessThan($tiny) {
    margin: 0;
  }
}

.SideNavigation-Body {
  padding: 0 20px 20px;
  @include lessThan($small) {
    display: none;
    padding: 0 36px 36px;
    &.-opened {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      display: block !important;
      width: 100%;
      z-index: z-index-of(opened-side-navigation);
      background-color: $white;
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
}

.SideNavigation-Menu {
  @include lessThan($small) {
    padding-top: 50px;
  }
}

.SideNavigation-LanguageLabel {
  display: block;
  margin-bottom: 5px;
  font-size: 0.85rem;
}

.SideNavigation-Footer {
  padding-top: 20px;
}

.SideNavigation-Social {
  display: flex;
}

.SideNavigation-SocialLink {
  border: 1px dotted transparent;
  border-radius: 30px;
  color: $gray-3;

  &:link,
  &:hover,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }

  &:focus {
    color: inherit;
    text-decoration: none;
    border: 1px dotted $gray-3;
    outline: none;
  }

  & + & {
    margin-left: 10px;
  }

  img {
    width: 30px;
  }
}

.SideNavigation-Copyright {
  display: block;
  margin-top: 15px;
  color: $gray-1;
  font-size: 10px;
  line-height: 1.3;
  font-weight: bold;
}

.SideNavigation-LicenseLink {
  &:focus {
    outline: 1px dotted $gray-3;
  }
}
</style>
