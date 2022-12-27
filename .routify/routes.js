
/**
 * @roxi/routify 2.18.8
 * File generated Mon Dec 26 2022 04:42:27 GMT+0300 (GMT+03:00)
 */

export const __version = "2.18.8"
export const __timestamp = "2022-12-26T01:42:27.209Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "about.svelte",
      "filepath": "/about.svelte",
      "name": "about",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/about.svelte",
      "importPath": "../src/pages/about.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/about",
      "id": "_about",
      "component": () => import('../src/pages/about.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "contact.svelte",
      "filepath": "/contact.svelte",
      "name": "contact",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/contact.svelte",
      "importPath": "../src/pages/contact.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/contact",
      "id": "_contact",
      "component": () => import('../src/pages/contact.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "gyms",
      "filepath": "/gyms",
      "name": "gyms",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/gyms",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[gymID].svelte",
          "filepath": "/gyms/[gymID].svelte",
          "name": "[gymID]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/gyms/[gymID].svelte",
          "importPath": "../src/pages/gyms/[gymID].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/gyms/:gymID",
          "id": "_gyms__gymID",
          "component": () => import('../src/pages/gyms/[gymID].svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/gyms/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/gyms/index.svelte",
          "importPath": "../src/pages/gyms/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/gyms/index",
          "id": "_gyms_index",
          "component": () => import('../src/pages/gyms/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/gyms"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "gyms.svelte",
      "filepath": "/gyms.svelte",
      "name": "gyms",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/gyms.svelte",
      "importPath": "../src/pages/gyms.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/gyms",
      "id": "_gyms",
      "component": () => import('../src/pages/gyms.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "ideas.svelte",
      "filepath": "/ideas.svelte",
      "name": "ideas",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/ideas.svelte",
      "importPath": "../src/pages/ideas.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/ideas",
      "id": "_ideas",
      "component": () => import('../src/pages/ideas.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "login.svelte",
      "filepath": "/login.svelte",
      "name": "login",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/login.svelte",
      "importPath": "../src/pages/login.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/login",
      "id": "_login",
      "component": () => import('../src/pages/login.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "register.svelte",
      "filepath": "/register.svelte",
      "name": "register",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/register.svelte",
      "importPath": "../src/pages/register.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/register",
      "id": "_register",
      "component": () => import('../src/pages/register.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "user",
      "filepath": "/user",
      "name": "user",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/user",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[userid].svelte",
          "filepath": "/user/[userid].svelte",
          "name": "[userid]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/user/[userid].svelte",
          "importPath": "../src/pages/user/[userid].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/user/:userid",
          "id": "_user__userid",
          "component": () => import('../src/pages/user/[userid].svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/user/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/osman/en_esp_proj3/Fitfinder-Front/src/pages/user/index.svelte",
          "importPath": "../src/pages/user/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/user/index",
          "id": "_user_index",
          "component": () => import('../src/pages/user/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/user"
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

