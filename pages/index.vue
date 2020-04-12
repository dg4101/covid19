<template>
  <div class="MainPage">
    <div class="Header mb-3">
      <page-header :icon="headerItem.icon">
        {{ headerItem.title }}
      </page-header>
      <div class="UpdatedAt">
        <span>{{ $t('最終更新') }} </span>
        <time :datetime="updatedAt">{{ Data.lastUpdate }}</time>
      </div>
      <div
        v-show="!['ja', 'ja-basic'].includes($i18n.locale)"
        class="Annotation"
      >
        <span>{{ $t('注釈') }} </span>
      </div>
    </div>
    <whats-new class="mb-4" :items="newsItems" />
    <static-info
      class="mb-4"
<<<<<<< HEAD
      :url="localePath('/flow')"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <v-row class="DataBlock">
      <confirmed-cases-details-card />
      <tested-cases-details-card />
      <confirmed-cases-attributes-card />
      <confirmed-cases-number-card />
      <inspection-persons-number-card />
      <tested-number-card />
      <telephone-advisory-reports-number-card />
      <consultation-desk-reports-number-card />
      <metro-card />
      <agency-card />
      <shinjuku-visitors-card />
      <chiyoda-visitors-card />
    </v-row>
    <v-divider />
    <v-row class="DataBlock">
      <shinjuku-st-map-card />
      <tokyo-st-map-card />
=======
      :url="'http://www.pref.osaka.lg.jp/iryo/osakakansensho/corona-denwa.html'"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
    />
    <v-row class="DataBlock">
      <v-col cols="12" md="6" class="DataCard">
        <svg-card
          :title="$t('検査陽性者の状況')"
          :title-id="'details-of-confirmed-cases'"
          :date="Data.inspections_summary.date"
        >
          <confirmed-cases-table v-bind="confirmedCases" />
        </svg-card>
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('陽性者数')"
          :title-id="'number-of-confirmed-cases'"
          :chart-id="'time-bar-chart-patients'"
          :chart-data="patientsGraph"
          :date="Data.patients.date"
          :unit="$t('人')"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <data-table
          :title="$t('陽性者の属性')"
          :title-id="'attributes-of-confirmed-cases'"
          :chart-data="patientsTable"
          :chart-option="{}"
          :date="Data.patients.date"
          :info="sumInfoOfPatients"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('陰性確認済（退院者累計）')"
          :title-id="'number-of-treated'"
          :chart-id="'time-bar-chart-inspections'"
          :chart-data="treatedGraph"
          :date="Data.treated_summary.date"
          :note="$t('（注）退院者とは新型コロナウイルス感染症が治癒した者')"
          :unit="$t('人')"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('検査実施件数')"
          :title-id="'number-of-tested'"
          :chart-id="'time-bar-chart-inspections'"
          :chart-data="inspectionsGraph"
          :date="Data.inspections_summary.date"
          :unit="$t('件.tested')"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-stacked-bar-chart
          :title="$t('新型コロナ受診相談センターへの相談件数')"
          :title-id="'number-of-contacts２'"
          :chart-id="'time-stacked-bar-chart-inspections'"
          :chart-data="contacts2Graph"
          :date="Data.contacts2_summary.date"
          :items="contacts2Items"
          :labels="contacts2Labels"
          :unit="$t('件.reports')"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('府民向け相談窓口への相談件数')"
          :title-id="'number-of-contacts1'"
          :chart-id="'time-bar-chart-inspections'"
          :chart-data="contactsGraph"
          :date="Data.contacts1_summary.date"
          :unit="$t('件.reports')"
        />
      </v-col>
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
<<<<<<< HEAD
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
=======
import TimeBarChart from '@/components/TimeBarChart.vue'
import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import DataTable from '@/components/DataTable.vue'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
import News from '@/data/news.json'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import TestedCasesDetailsCard from '@/components/cards/TestedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import InspectionPersonsNumberCard from '@/components/cards/InspectionPersonsNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'
import MetroCard from '@/components/cards/MetroCard.vue'
import AgencyCard from '@/components/cards/AgencyCard.vue'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'
import ShinjukuVisitorsCard from '@/components/cards/ShinjukuVisitorsCard.vue'
import ChiyodaVisitorsCard from '@/components/cards/ChiyodaVisitorsCard.vue'
import ShinjukuStMapCard from '@/components/cards/ShinjukuStMapCard.vue'
import TokyoStMapCard from '@/components/cards/TokyoStMapCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
<<<<<<< HEAD
    WhatsNew,
    StaticInfo,
    ConfirmedCasesDetailsCard,
    TestedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    TestedNumberCard,
    InspectionPersonsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    ConsultationDeskReportsNumberCard,
    MetroCard,
    AgencyCard,
    ShinjukuVisitorsCard,
    ChiyodaVisitorsCard,
    ShinjukuStMapCard,
    TokyoStMapCard
  },
  data() {
    const data = {
      Data,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('都内の最新感染動向')
=======
    TimeBarChart,
    WhatsNew,
    StaticInfo,
    DataTable,
    SvgCard,
    ConfirmedCasesTable,
    TimeStackedBarChart
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    // 感染者数
    const patientsTable = formatTable(Data.patients.data)
    // 検査実施状況
    const inspectionsGraph = formatGraph(Data.inspections_summary.data)
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(Data.main_summary)
    // 府民向け相談窓口相談件数
    const contactsGraph = formatGraph(Data.contacts1_summary.data)
    // 新型コロナ受診相談センターへの相談件数
    const contacts2Graph = [
      Data.contacts2_summary.data['府管轄保健所'],
      Data.contacts2_summary.data['政令中核市保健所']
    ]
    const contacts2Items = [
      this.$t('府管轄保健所'),
      this.$t('政令中核市保健所')
    ]
    const contacts2Labels = Data.contacts2_summary.labels
    // 治療終了者数
    const treatedGraph = formatGraph(Data.treated_summary.data)

    const sumInfoOfPatients = {
      lText: patientsGraph[
        patientsGraph.length - 1
      ].cumulative.toLocaleString(),
      sText: `${this.$t('{date}の累計', {
        date: patientsGraph[patientsGraph.length - 1].label
      })}`,
      unit: '人'
    }

    // 陽性患者の属性 ヘッダー翻訳
    for (const header of patientsTable.headers) {
      header.text = this.$t(header.value)
    }

    const otherAges = ['10歳未満', '不明', '未就学児', '就学児', '調査中']

    // 陽性患者の属性 中身の翻訳
    for (const row of patientsTable.datasets) {
      row['居住地'] = this.$t(row['居住地'])
      row['性別'] = this.$t(row['性別'])
      row['退院'] = this.$t(row['退院'])

      if (otherAges.includes(row['年代'])) {
        row['年代'] = this.$t(row['年代'])
      } else {
        const age = row['年代'].substring(0, 2)
        row['年代'] = this.$t('{age}代', { age })
      }
    }

    const data = {
      Data,
      patientsTable,
      patientsGraph,
      inspectionsGraph,
      confirmedCases,
      contactsGraph,
      contacts2Graph,
      contacts2Items,
      contacts2Labels,
      treatedGraph,
      sumInfoOfPatients,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('大阪府の最新感染動向'),
        date: Data.lastUpdate
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
      },
      newsItems: News.newsItems
    }
    return data
  },
  computed: {
    updatedAt() {
      return convertDatetimeToISO8601Format(this.$data.Data.lastUpdate)
    }
  },
  head(): MetaInfo {
    return {
<<<<<<< HEAD
      title: this.$t('都内の最新感染動向') as string
=======
      title: this.$t('大阪府の最新感染動向')
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
    }
  }
})
</script>

<style lang="scss" scoped>
.MainPage {
  .Header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @include lessThan($small) {
      flex-direction: column;
      align-items: baseline;
    }
  }

  .UpdatedAt {
    @include font-size(14);

    color: $gray-3;
    margin-bottom: 0.2rem;
  }

  .Annotation {
    @include font-size(12);

    color: $gray-3;
    @include largerThan($small) {
      margin: 0 0 0 auto;
    }
  }
  .DataBlock {
    margin: 20px -8px;

    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }

      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
