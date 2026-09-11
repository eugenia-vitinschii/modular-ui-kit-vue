/* DEMO ROUTES */

import { RouterView, type RouteRecordRaw } from "vue-router";

export const demoRoutes: RouteRecordRaw[] = [
   {
      path: '/demo',
      name: 'demo-ui-kit',
      meta: { title: "Demo" },
      children: [
         {
            path: '',
            name: 'demo-home',
            component: () => import('../pages/DemoHomeView.vue'),
         },
         {
            path: 'ui',
            component: RouterView,
            meta: { title: "UI" },
            children: [
               // 1. Form Elements (/demo/ui/form/*)
               {
                  path: 'form',
                  name: 'ui-form',
                  component: RouterView,
                  meta: { title: "Form" },
                  children: [
                     {
                        path: 'inputs',
                        name: 'ui-form-inputs',
                        component: () => import('../pages/form-elements/InputView.vue'),
                        meta: { title: "Inputs" }
                     },
                     {
                        path: 'selects',
                        name: 'ui-form-selects',
                        component: () => import('../pages/form-elements/SelectView.vue'),
                        meta: { title: "Selects" }
                     },
                     {
                        path: 'textareas',
                        name: 'ui-form-textareas',
                        component: () => import('../pages/form-elements/TextareaView.vue'),
                        meta: { title: "Textareas" }
                     },
                     {
                        path: 'checkboxes',
                        name: 'ui-form-checkboxes',
                        component: () => import('../pages/form-elements/CheckboxView.vue'),
                        meta: { title: "Checkboxes" }
                     },
                     {
                        path: 'radio',
                        name: 'ui-form-radio',
                        component: () => import('../pages/form-elements/RadioView.vue'),
                        meta: { title: "Radio" }
                     },
                  ]
               },

               // 2. Buttons (/demo/ui/buttons)
               {
                  path: 'buttons',
                  name: 'ui-buttons',
                  component: () => import('../pages/ButtonsView.vue'),
                  meta: { title: "Buttons" },
               },

               // 3. Data Display (/demo/ui/data-display/*)
               {
                  path: 'data-display',
                  name: 'ui-data-display',
                  component: RouterView,
                  meta: { title: "Data Display" },
                  children: [
                     {
                        path: 'badge',
                        name: 'ui-data-display-badge',
                        component: () => import('../pages/data-display/BadgesView.vue'),
                        meta: { title: "Badges" },
                     },
                     {
                        path: 'table',
                        name: 'ui-data-display-table',
                        component: () => import('../pages/data-display/TableView.vue'),
                        meta: { title: "Table" },
                     },
                     {
                        path: 'metric-cards',
                        name: 'ui-data-display-metric-card',
                        component: () => import('../pages/data-display/MetricCardView.vue'),
                        meta: { title: "Metric Cards" },
                     },
                     {
                        path: 'charts',
                        name: 'ui-data-display-chart',
                        component: () => import('../pages/data-display/ChartView.vue'),
                        meta: { title: "Charts" },
                     },

                  ]
               },

               // 4. General (/demo/ui/flow, /demo/ui/feedback)
               {
                  path: 'flow',
                  name: 'ui-flow',
                  component: () => import('../pages/data-display/ComponentFlowView.vue'),
                  meta: { title: "Component Flow" },
               },
               {
                  path: 'feedback',
                  name: 'ui-feedback',
                  component: () => import('../pages/feedback/FeedbackDemoView.vue'),
                  meta: { title: "Toast and Modal" },
               },

               // 5. Typography (/demo/ui/typography/*)
               {
                  path: 'typography',
                  name: 'ui-typography',
                  component: RouterView,
                  meta: { title: "Typography" },
                  children: [
                     {
                        path: 'text',
                        name: 'ui-typography-text',
                        component: () => import('../pages/form-elements/TextView.vue'),
                        meta: { title: "Text" },
                     },
                  ]
               },
               {
                  path: 'comments',
                  name: 'ui-comment',
                  component: () => import('../pages/data-display/CommentView.vue'),
                  meta: { title: "Comments" },
               }
            ]
         },
      ]
   },
];