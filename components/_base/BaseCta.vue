<template>
  <a
    @click="clickFunction1"
    :class="['u-base-cta', `u-base-cta--${type}`, {'u-base-cta--small': small}, {'u-base-cta--block': block}]"
    :href="url"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    v-on="$listeners"
    v-if="url=='https://www.productsup.com/pharmaceutical_manufacturers'"
  >
    <icon-east v-if="primary && !small"/>

    <slot></slot>
  </a>
  <a
    @click="clickFunction2"
    :class="['u-base-cta', `u-base-cta--${type}`, {'u-base-cta--small': small}, {'u-base-cta--block': block}]"
    :href="url"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    v-on="$listeners"
    v-else-if="url=='https://www.productsup.com/e-pharmacy'"
  >
    <icon-east v-if="primary && !small"/>

    <slot></slot>
  </a>
  <a

    :class="['u-base-cta', `u-base-cta--${type}`, {'u-base-cta--small': small}, {'u-base-cta--block': block}]"
    :href="url"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    v-on="$listeners"
    v-else-if="url"
  >
    <icon-east v-if="primary && !small"/>

    <slot></slot>
  </a>

  <button
    :class="['u-base-cta', `u-base-cta--${type}`, {'u-base-cta--small': small}, {'u-base-cta--block': block}]"
    v-on="$listeners"
    v-else
  >
    <icon-east v-if="primary && !small"/>

    <slot></slot>
  </button>
</template>

<script>
import IconEast from '../atom/IconEast.vue';

export const Types = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  
}

export default {
  name: 'BaseCta',
  components: { IconEast },
  props: {
    url: String,
    external: Boolean,
    block: Boolean,
    secondary: Boolean,
    tertiary: Boolean,
    small: Boolean,
    contras: Boolean,
    entryId: String,
    targetId: String,
    targetArea1: String
  },
  computed: {
    type() {
      return this.secondary ? Types.SECONDARY : (this.tertiary ? Types.TERTIARY : Types.PRIMARY);
    },
    primary() {
      return !(this.secondary || this.tertiary);
    },

  }, 
  methods:{
  //Below are the two click Functions associated with the two CTAs for scroll functionality
  clickFunction1(e){
    e.preventDefault() 
    this.scrollTarget1()   
  },
  clickFunction2(e){
    e.preventDefault() 
    this.scrollTarget2()
    return false
  },

  // Scroll Function associated with Button 1
  async scrollTarget1(){
    const textToCheck = ["Explore now", "Jetzt erkunden"];
    const elementsWithText = Array.from(document.querySelectorAll("*")).filter(el => {
      const trimmedText = el.textContent.trim();
      return textToCheck.includes(trimmedText);
    });
    if (elementsWithText.length > 0) {
      // Scroll to the first element found with the text as declared above
      elementsWithText[0].scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("No matching elements found.");
    }
  },

  //Scroll Function associated with Button 2
  async scrollTarget2(){
    const textToCheck = ["Explore Product Guard PX now!", "Product Guard PX erkunden"];
    const elementsWithText = Array.from(document.querySelectorAll("*")).filter(el => {
      const trimmedText = el.textContent.trim();
      return textToCheck.includes(trimmedText);
    });
    if (elementsWithText.length > 0) {
      // Scroll to the first element found with the text as declared above
      elementsWithText[0].scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("No matching elements found.");
    }
  },
 },
}

</script>

<style scoped lang="scss">
.u-base-cta {
  --focus-shadow:0 0 0 3px rgba(0 169 255 / 0.35);

  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 56px;
  border: unset;
  border-radius: 28px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: unset;
  letter-spacing: 0;
  line-height: 24px;
  outline: unset;

  &:focus {
    box-shadow: var(--focus-shadow);
  }

  &--primary {
    --shadow: 0 8px 18px 0 rgba(15  25  45 / 0.2);

    padding-left: 24px;
    padding-right: 24px;
    background-color: var(--pink);
    box-shadow: var(--shadow);

    &:focus {
      box-shadow: var(--shadow), var(--focus-shadow);
    }

    &:hover,
    &:active,
    &.active {
      background-color: var(--pink-lighten);
    }
  }

  &--small {
    min-height: 35px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 1rem;
  }

  &--secondary {
    padding-left: 28px;
    padding-right: 28px;
    background-color: var(--blue-darkest);

    &:hover,
    &:active,
    &.active {
      background-color: var(--blue-darkest-lighten);
    }
  }

  &--tertiary {
    padding-left: 28px;
    padding-right: 28px;
    background-color: var(--tertiary-cta-background,  #fff);
    border: 2px solid var(--tertiary-cta-border, var(--blue-darkest));
    border-radius: 28px;
    color: var(--tertiary-cta-font, var(--blue-darkest));

    &:hover,
    &:active,
    &.active {
      background-color: var(--tertiary-cta-background-hover, var(--blue-darkest));
      border-color: var(--tertiary-cta-border-hover, #fff);
      color: var(--tertiary-cta-font-hover, #fff);
    }
  }
}
</style>
