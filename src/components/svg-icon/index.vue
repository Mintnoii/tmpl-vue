<template>
  <span class="svg-icon" :class="sizeClass">
    <svg aria-hidden="true">
      <use :xlink:href="symbolId" />
    </svg>
  </span>
</template>

<script setup lang="ts">
interface Props {
  name: string
  mini?: boolean
  small?: boolean
  middle?: boolean
  large?: boolean
}

const props = defineProps<Props>()

const sizeClass = {
  mini: props.mini,
  small: props.small,
  middle: props.middle,
  large: props.large
}

const symbolId = computed(() => {
  const namePathArr = String(props.name).replace('/', '-')
  return `#svg-icon-${namePathArr}`
})
</script>

<style lang="scss">
.svg-icon {
  position: relative;
  top: 0.16em;
  display: inline-block;
  width: 1.2em;
  height: 1em;
  vertical-align: baseline;

  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
    outline: none;
    vertical-align: baseline;
  }

  &.mini svg {
    transform: scale(0.8);
  }

  &.small svg {
    transform: scale(0.9);
  }

  &.middle svg {
    transform: scale(1.1);
  }

  &.large svg {
    transform: scale(1.2);
  }
}
</style>
