/**
 * @fileoverview A plugin that adds ESLint globals for nuxt3 auto imported functions
 * @author LuckyWindsck
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  environments: {
    'nuxt3-auto-import/nuxt': {
      globals: {
        useHead: 'readonly',
        useMeta: 'readonly',
        isVue2: 'readonly',
        isVue3: 'readonly',
        useAsyncData: 'readonly',
        useLazyAsyncData: 'readonly',
        refreshNuxtData: 'readonly',
        defineNuxtComponent: 'readonly',
        useNuxtApp: 'readonly',
        defineNuxtPlugin: 'readonly',
        useRuntimeConfig: 'readonly',
        useState: 'readonly',
        useFetch: 'readonly',
        useLazyFetch: 'readonly',
        useCookie: 'readonly',
        useRequestHeaders: 'readonly',
        useRequestEvent: 'readonly',
        useRouter: 'readonly',
        useRoute: 'readonly',
        useActiveRoute: 'readonly',
        defineNuxtRouteMiddleware: 'readonly',
        navigateTo: 'readonly',
        abortNavigation: 'readonly',
        addRouteMiddleware: 'readonly',
        throwError: 'readonly',
        clearError: 'readonly',
        useError: 'readonly',
        defineNuxtLink: 'readonly',
        withCtx: 'readonly',
        withDirectives: 'readonly',
        withKeys: 'readonly',
        withMemo: 'readonly',
        withModifiers: 'readonly',
        withScopeId: 'readonly',
        onActivated: 'readonly',
        onBeforeMount: 'readonly',
        onBeforeUnmount: 'readonly',
        onBeforeUpdate: 'readonly',
        onDeactivated: 'readonly',
        onErrorCaptured: 'readonly',
        onMounted: 'readonly',
        onRenderTracked: 'readonly',
        onRenderTriggered: 'readonly',
        onServerPrefetch: 'readonly',
        onUnmounted: 'readonly',
        onUpdated: 'readonly',
        computed: 'readonly',
        customRef: 'readonly',
        isProxy: 'readonly',
        isReactive: 'readonly',
        isReadonly: 'readonly',
        isRef: 'readonly',
        markRaw: 'readonly',
        proxyRefs: 'readonly',
        reactive: 'readonly',
        readonly: 'readonly',
        ref: 'readonly',
        shallowReactive: 'readonly',
        shallowReadonly: 'readonly',
        shallowRef: 'readonly',
        toRaw: 'readonly',
        toRef: 'readonly',
        toRefs: 'readonly',
        triggerRef: 'readonly',
        unref: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly',
        isShallow: 'readonly',
        effect: 'readonly',
        effectScope: 'readonly',
        getCurrentScope: 'readonly',
        onScopeDispose: 'readonly',
        defineComponent: 'readonly',
        defineAsyncComponent: 'readonly',
        resolveComponent: 'readonly',
        getCurrentInstance: 'readonly',
        h: 'readonly',
        inject: 'readonly',
        nextTick: 'readonly',
        provide: 'readonly',
        useAttrs: 'readonly',
        useCssModule: 'readonly',
        useCssVars: 'readonly',
        useSlots: 'readonly',
        useTransitionState: 'readonly',
      },
    },
  },
};