<template>
  <div class="header">
    <h2 class="pageTitle">
      <v-icon v-if="icon" size="40" class="mr-2">
        {{ icon }}
      </v-icon>
      <slot />
    </h2>
<<<<<<< HEAD
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
=======
    <div class="date">
      <span>{{ $t('最終更新') }} </span>
      <time :datetime="formattedDate">{{ formattedDate }}</time>
    </div>
  </div>
</template>

<script>
import { convertDateToFormat } from '@/utils/formatDate'
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e

export default Vue.extend({
  props: {
    icon: {
      type: String
    }
<<<<<<< HEAD
=======
  },
  data() {
    const formattedDate = convertDateToFormat(this.date)
    return { formattedDate }
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}

.pageTitle {
  @include font-size(30);

  color: $gray-2;
  display: flex;
  align-items: center;
  line-height: 1.35;
  font-weight: normal;
  margin: 0 0.5em 0 0;

  @include lessThan($small) {
    @include font-size(20);
  }
}
</style>
