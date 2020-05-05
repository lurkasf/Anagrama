<template>
    <div id="fogos" class="">
      <div class="firework">
        <div class="explosion">
          <div class="spark green"></div>
        </div>
        <div class="explosion">
          <div class="spark blue"></div>
        </div>
        <div class="explosion">
          <div class="spark red"></div>
        </div>
        <div class="explosion">
          <div class="spark red"></div>
        </div>
        <div class="explosion">
          <div class="spark yellow"></div>
        </div>
        <div class="explosion">
          <div class="spark blue"></div>
        </div>
        <div class="explosion">
          <div class="spark green"></div>
        </div>
        <div class="explosion">
          <div class="spark yellow"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Fireworks',
    data: () => ({
      get console() { return window.console; }
    }),
}
</script>