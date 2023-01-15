
/**
 * @roxi/routify 2.18.8
 * File generated Sun Jan 15 2023 01:06:02 GMT+0100 (hora estándar de Europa central)
 */

export const __version = "2.18.8"
export const __timestamp = "2023-01-15T00:06:02.483Z"

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
  "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/_fallback.svelte",
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
      "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/about.svelte",
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
      "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/contact.svelte",
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
      "file": "gym",
      "filepath": "/gym",
      "name": "gym",
      "ext": "",
      "badExt": false,
      "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/gym",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[gymId].svelte",
          "filepath": "/gym/[gymId].svelte",
          "name": "[gymId]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/gym/[gymId].svelte",
          "importPath": "../src/pages/gym/[gymId].svelte",
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
          "path": "/gym/:gymId",
          "id": "_gym__gymId",
          "component": () => import('../src/pages/gym/[gymId].svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "FormGym.svelte",
          "filepath": "/gym/FormGym.svelte",
          "name": "FormGym",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/gym/FormGym.svelte",
          "importPath": "../src/pages/gym/FormGym.svelte",
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
          "path": "/gym/FormGym",
          "id": "_gym_FormGym",
          "component": () => import('../src/pages/gym/FormGym.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "GymTable.svelte",
          "filepath": "/gym/GymTable.svelte",
          "name": "GymTable",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/gym/GymTable.svelte",
          "importPath": "../src/pages/gym/GymTable.svelte",
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
          "path": "/gym/GymTable",
          "id": "_gym_GymTable",
          "component": () => import('../src/pages/gym/GymTable.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "new.svelte",
          "filepath": "/gym/new.svelte",
          "name": "new",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/gym/new.svelte",
          "importPath": "../src/pages/gym/new.svelte",
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
          "path": "/gym/new",
          "id": "_gym_new",
          "component": () => import('../src/pages/gym/new.svelte').then(m => m.default)
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
      "path": "/gym"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "gyms.svelte",
      "filepath": "/gyms.svelte",
      "name": "gyms",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/gyms.svelte",
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
      "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/ideas.svelte",
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
      "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/index.svelte",
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
      "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/login.svelte",
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
      "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/register.svelte",
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
      "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/user",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[userid].svelte",
          "filepath": "/user/[userid].svelte",
          "name": "[userid]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/user/[userid].svelte",
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
          "absolutePath": "C:/Users/devcr/Desktop/Devathon/Fitfinder-Front/src/pages/user/index.svelte",
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

