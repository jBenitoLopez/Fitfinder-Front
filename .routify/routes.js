
/**
 * @roxi/routify 2.18.8
 * File generated Thu Nov 24 2022 23:18:56 GMT+0100 (hora estándar de Europa central)
 */

export const __version = "2.18.8"
export const __timestamp = "2022-11-24T22:18:56.829Z"

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

