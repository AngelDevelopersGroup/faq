import Vue from 'vue'
import Router from 'vue-router'

import main from '@/views/main.vue'
import translate from '@/views/translate.vue'
import editor from '@/views/editor.vue'
import cleaner from '@/views/cleaner.vue'
import typesetter from '@/views/typesetter.vue'
import discord from '@/views/discord.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/translate',
      name: 'translate',
      component: translate
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    },
    {
      path: '/cleaner',
      name: 'cleaner',
      component: cleaner
    },
    {
      path: '/typesetter',
      name: 'typesetter',
      component: typesetter
    },
    {
      path: '/discord',
      name: 'discord',
      component: discord
    }
  ]
})
