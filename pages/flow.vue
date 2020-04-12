<template>
  <div class="Flow">
    <div class="Flow-Heading">
      <CovidIcon aria-hidden="true" />
      <page-header class="Flow-Heading-Title">
        {{ $t('新型コロナウイルス感染症が心配なときに') }}
      </page-header>
      <PrinterButton :wrapper-class="'Flow-PullRight'" to="/print/flow" />
    </div>
    <div>
      <div class="Flow-Card-Button-Wrapper">
        <a
          href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
          target="_blank"
          rel="noopener noreferrer"
          class="Flow-Card-Button"
        >
          <span class="Flow-Card-Button-Description">
            {{ $t('かかりつけ医に相談することもできます。') }}<br />
            {{ $t('詳しくはこちらをご参照ください。') }}
          </span>
          {{ $t('詳細を見る（東京都福祉保健局）') }}
          <v-icon class="Flow-Card-Button-ExternalLinkIcon" size="20">
            mdi-open-in-new
          </v-icon>
        </a>
      </div>
      <div class="only-pc" aria-hidden="true">
        <flow-pc />
      </div>
      <div class="only-sp">
<<<<<<< HEAD
        <flow-sp />
      </div>
=======
        <div class="Flow-Card-Parts">
          <div class="mb-5">
            <img
              src="/flow/sp/sp_flow_01_01@2x.png"
              alt="発症前２週間以内の出来ごとと症状／「新型コロナウイルス感染者」と濃厚接触をした方／発熱または呼吸器症状"
            />
          </div>
          <div class="mx-2 mb-5">
            <img
              src="/flow/sp/sp_flow_01_02@2x.png"
              alt="流行地域への渡航・居住歴がある方 ご本人か濃厚接触をした方／呼吸器症状かつ発熱37.5℃以上"
            />
          </div>
          <div>
            <a v-scroll-to="'#consult'" href="#consult">
              <img
                src="/flow/sp/sp_flow_01_02_03_nav@2x.png"
                alt="新型コロナ受診相談窓口へ"
              />
            </a>
          </div>
        </div>
        <div class="Flow-Card-Parts">
          <div class="mx-2 mb-5">
            <img
              src="/flow/sp/sp_flow_02@2x.png"
              alt="一般の方／風邪のような症状・発熱37.5℃以上・強いだるさ・息苦しさ／４日以上続いている"
            />
          </div>
          <div>
            <a v-scroll-to="'#consult'" href="#consult">
              <img
                src="/flow/sp/sp_flow_01_02_03_nav@2x.png"
                alt="新型コロナ受診相談窓口へ"
              />
            </a>
          </div>
        </div>
        <div class="Flow-Card-Parts">
          <div class="mx-2 mb-5">
            <img
              src="/flow/sp/sp_flow_03@2x.png"
              alt="ご高齢な方・基礎疾患のある方・妊娠中の方／風邪のような症状・発熱37.5℃以上・強いだるさ・息苦しさ／２日以上続いている"
            />
          </div>
          <div>
            <a v-scroll-to="'#consult'" href="#consult">
              <img
                src="/flow/sp/sp_flow_01_02_03_nav@2x.png"
                alt="新型コロナ受診相談窓口へ"
              />
            </a>
          </div>
        </div>
        <div class="Flow-Card-Parts">
          <div class="mx-2 mb-5">
            <img
              src="/flow/sp/sp_flow_04@2x.png"
              alt="不安に思う方／微熱・軽い咳・感染の不安／新型コロナコールセンター 午前９時から午後９時（土日祝含む）"
            />
          </div>
          <div class="TelLink">
            <a href="tel:0570550571"
              ><img src="/flow/sp/sp_flow_tel_01@2x.png" alt="0570-550571"
            /></a>
          </div>
          <div class="mt-4">
            <a v-scroll-to="'#consult'" href="#consult">
              <img
                src="/flow/sp/sp_flow_04_nav@2x.png"
                alt="専門的な助言が必要な場合"
              />
            </a>
          </div>
        </div>
        <div id="consult" class="Flow-Card-Parts Flat">
          <h3 class="SodanHeader Title">
            新型コロナ受診相談窓口
          </h3>
          <p class="SodanHeader">
            帰国者・接触者電話相談センター
          </p>
          <div class="SodanHeader">
            <div class="SodanChip">
              24時間対応
            </div>
          </div>
          <dl>
            <div class="SodanHeijitsu">
              <dt class="Heijitsu">
                平日（日中）
              </dt>
              <dd>
                <a
                  class="Link"
                  href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
                  target="_blank"
                  rel="noopener"
                >
                  各保健所の電話番号は福祉保健局HPへ
                  <v-icon size="16">
                    mdi-open-in-new
                  </v-icon>
                </a>
              </dd>
            </div>
            <div class="SodanYakan">
              <dt class="Yakan">
                平日（夜間）
                <br />
                <span class="SodanTime">午後５時から翌朝午前９時</span>
                <br />
                土日祝 終日
              </dt>
              <dd class="TelLink">
                <a href="tel:0353204592">
                  <img
                    src="/flow/sp/sp_flow_tel_03@2x.png"
                    alt="03-5320-4592"
                  />
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div class="Flow-Card-Parts">
          <div class="mx-2 mb-5">
            <img
              src="/flow/sp/sp_flow_06_01@2x.png"
              alt="新型コロナ受診相談窓口による相談結果／新型コロナ外来受診が必要と判断された場合／新型コロナ外来（帰国者・接触者外来）医師による判断"
            />
          </div>
          <div class="Col2Btn">
            <div class="mx-1 mb-5">
              <a v-scroll-to="'#not_required'" href="#not_required">
                <img
                  src="/flow/sp/sp_flow_06_nav_01@2x.png"
                  alt="検査の必要なし"
                />
              </a>
            </div>
            <div class="mx-1 mb-5">
              <a v-scroll-to="'#pcr'" href="#pcr">
                <img
                  src="/flow/sp/sp_flow_06_nav_02@2x.png"
                  alt="検査の必要あり"
                />
              </a>
            </div>
          </div>
          <div id="pcr" class="mx-2 mb-5">
            <img
              src="/flow/sp/sp_flow_06_02@2x.png"
              alt="PCR検査 大阪府健康安全研究センター等"
            />
          </div>
          <div class="Col2Btn">
            <div class="mx-1 mb-5">
              <a v-scroll-to="'#not_required'" href="#not_required">
                <img src="/flow/sp/sp_flow_06_nav_03@2x.png" alt="陰性" />
              </a>
            </div>
            <div class="mx-1 mb-5">
              <a v-scroll-to="'#hospitalized'" href="#hospitalized">
                <img src="/flow/sp/sp_flow_06_nav_04@2x.png" alt="陽性" />
              </a>
            </div>
          </div>
          <div id="not_required" class="mx-2">
            <img
              src="/flow/sp/sp_flow_06_03@2x.png"
              alt="新型コロナ外来受診が不要と判断された場合／自宅で安静に過ごす・一般の医療機関を受診／症状が良くならない場合は新型コロナ受診相談窓口に相談"
            />
          </div>
        </div>
        <div id="hospitalized" class="Flow-Card-Parts">
          <div class="Smaller">
            <img
              src="/flow/sp/sp_flow_06@2x.png"
              alt="入院となります／感染症指定医療機関等"
            />
          </div>
        </div>
      </div>
      <a
        href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
        target="_blank"
        rel="noopener"
        class="Flow-Card-Button"
      >
        詳細を見る(大阪府福祉保健局)
        <v-icon class="Flow-Card-Button-ExternalLinkIcon" size="20">
          mdi-open-in-new
        </v-icon>
      </a>
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import CovidIcon from '@/static/covid.svg'
import PrinterButton from '@/components/PrinterButton.vue'
import FlowPc from '@/components/flow/FlowPc.vue'
import FlowSp from '@/components/flow/FlowSp.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    CovidIcon,
    PageHeader,
    PrinterButton,
    FlowPc,
    FlowSp
  },
  head(): any {
    const title: TranslateResult = this.$t(
      '新型コロナウイルス感染症が心配なときに'
    )
    return {
      title
    }
  }
})
</script>

<style lang="scss">
.Flow {
  margin-bottom: 20px;

  &-Heading {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    > svg {
      width: 30px;
      height: 30px;

      > path:not(:first-of-type) {
        fill: $gray-2;
      }
    }

    &-Title {
      margin-left: 8px;
    }
  }

  &-Card-Button {
    @include button-text('md');
    @include font-size(20);

    width: 100%;
    max-width: 600px;
    font-weight: bold;
    display: inline-block;
    text-decoration: none;
    color: $green-1 !important;

    &-Wrapper {
      text-align: center;
      margin-bottom: 20px;
    }

    &:hover {
      color: $white !important;
    }

    &-ExternalLinkIcon {
      margin-left: 2px;
      color: $green-1 !important;
    }

    &-Description {
      margin-bottom: 12px;
      display: block;
      font-weight: normal;
      text-align: left;
    }
  }

  &-PullRight {
    margin: 0 0 0 auto;
  }
}

@include largerThan($medium) {
  .only-sp {
    @include visually-hidden;
  }

  .only-pc {
    display: block;
  }
}

@include lessThan($medium) {
  .only-pc {
    display: none;
  }
}
</style>
