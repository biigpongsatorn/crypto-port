<template>
  <div class="stretch">
    <cryptoOverView/>
    Dashboard
  </div>
</template>

<script>
import cryptoOverView from '@/components/CryptoOverView'

export default {
  name: 'Dashboard',
  components: {
    cryptoOverView
  }
}
</script>
