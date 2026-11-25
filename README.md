# modular-ui-kit-vue

[![NPM Version](https://img.shields.io/npm/v/modular-ui-kit-vue?color=42b883)](https://www.npmjs.com/package/modular-ui-kit-vue)
[![NPM Downloads](https://img.shields.io/npm/dm/modular-ui-kit-vue?color=35495e)](https://www.npmjs.com/package/modular-ui-kit-vue)
[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/2e6247835bbf3928be881ca260cad051/raw/clone.json&logo=github)](https://github.com/MShawon/github-clone-count-badge)

A lightweight, high-performance UI component library for **Vue 3 + TypeScript**. Built on a unified system of design tokens, thoughtful accessibility (a11y) basics, and maximum performance optimization.

[Demo Project (main branch)](https://github.com/eugenia-vitinschii/modular-ui-kit-vue/tree/main) •
[Wiki & Documentation](https://github.com/eugenia-vitinschii/modular-ui-kit-vue/wiki)

## Features

- **Lightweight & Fast:** Minimal bundle size with zero heavy third-party dependencies.
- **Design Tokens:** All style are powered by native `--muk-*` CSS variables.
- **Scope Isolation:** All components use the `Muk*` prefix (`<muk-button>`, `<muk-input>`), eliminating conflicts with standard HTML tags or other UI libraries.
- **Accessible (a11y):** Built-in support for ARIA attributes, focus management, and full keyboard navigation.

## Installation

Install the package via your preferred package manager:

```bash
npm install modular-ui-kit-vue
# or
pnpm add modular-ui-kit-vue
# or
yarn add modular-ui-kit-vue

```

### Quick start

```
<template>
  <muk-text as="h1" type="muk-heading" variant="primary">Modular UI Kit</muk-text>
  <muk-text as="h2" type="muk-subheading" variant="warning">Craft flexible & lightweight Vue 3 interface<base-text>
  <muk-text variant="muted">Explore reusable components, custom design tokens, and flexible typography out of the box.</base-text>
</template>
<script setup lang="ts">
import { MukText } from 'modular-ui-kit-vue'
import 'modular-ui-kit-vue/dist/modular-ui-kit-vue.css'
</script>
```

### Available Components

Buttons

- MukButton: Standard action button
- MukIconButton: svg action button

Form Elements

- MukCheckbox: Checkbox input component
- MukInput: Standard text input field
- MukRadio: Radio button option
- MukSelect: Dropdown select menu
- MukTextarea : Multi-line text input field

Feedback & States

- MukToast / MukToastContainer: Toast notification components
- MukSkeleton: Skeleton loader for async data
- MukEmptyState: Placeholder display for empty data views
- MukErrorState: Placeholder display for error screens

Navigation

- MukBreadcrumbs: Breadcrumb navigation path
- MukPagination: Page navigation control

Overlays

- MukModal: Modal dialog window with color variants

Typography

- MukText: Standardized typography component

Data Display

- MukBadge: Compact badge component with icon, text, and size options
- MukMetricCard: Metric card component featuring title/value displays, optional trend indicator with invert support, loading state, and custom #icon slot
- MukTable classes only: `.muk-table-wrapper`, `.muk-table`, `.muk-table__actions--row` or `.muk-table__actions--column`
- MukChart: Chart component featuring a built-in empty state, a responsive skeleton loader matching the block size, an optional title (can be shown or hidden), and `.muk-chart__wrapper` for layout styling.

Comments

- MukCommentItem
- MukCommentForn

### Documentation

[![Wiki Documentation](https://img.shields.io/badge/docs-GitHub_Wiki-blue?style=for-the-badge&logo=github)](https://github.com/eugenia-vitinschii/modular-ui-kit/wiki/Muk-Button-Component)

### 🟢 MukText 🟢

A polymorphic typography component used to render semantic text elements (`p`, `span`, headings, links, etc.) with consistent font scales, color variants, and alignment tokens.

#### Props

| Prop      | Type            | Default           | Description                                                          |
| :-------- | :-------------- | :---------------- | :------------------------------------------------------------------- |
| `as`      | `string`        | `'p'`             | HTML tag or custom component name to render as the root element.     |
| `type`    | `UITextType`    | `'muk-body-text'` | Typography preset class defining font size, weight, and line height. |
| `variant` | `UITextVariant` | `'secondary'`     | Semantic text color variant mapped to theme design tokens.           |
| `align`   | `UITextAlign`   | `'left'`          | Horizontal text alignment (`left`, `center`, `right`, etc.).         |

#### Emits

_This component does not emit custom events._

#### Slots

| Slot      | Description                                                             |
| :-------- | :---------------------------------------------------------------------- |
| `default` | Text content or inline elements rendered inside the typography wrapper. |

---

### 🟢 MukButton 🟢

An interactive button component supporting visual variants, sizes, a built-in loading spinner state, and accessibility attributes (`disabled`, `aria-busy`, and screen-reader loading text).

#### Props

| Prop       | Type              | Default     | Description                                                               |
| :--------- | :---------------- | :---------- | :------------------------------------------------------------------------ |
| `variant`  | `UIButtonVariant` | `'primary'` | Visual style variant of the button (e.g., primary, secondary, outline).   |
| `size`     | `UISize`          | `'lg'`      | Button size preset (`sm`, `md`, `lg`, etc.).                              |
| `type`     | `UIButtonType`    | `'button'`  | Native HTML button type (`'button'`, `'submit'`, `'reset'`).              |
| `loading`  | `boolean`         | `false`     | Replaces slot content with a loading spinner and sets `aria-busy="true"`. |
| `disabled` | `boolean`         | `false`     | Disables user interaction and applies the native `disabled` attribute.    |

#### Emits

_This component does not emit custom events (native `click` events propagate to the root `<button>`)._

#### Slots

| Slot      | Description                                                                |
| :-------- | :------------------------------------------------------------------------- |
| `default` | Button label, icons, or custom content rendered when `loading` is `false`. |

---

### 🟢 MukIconButton 🟢

An icon-focused button component supporting visual variants, sizes, a loading spinner state, an optional text slot, and explicit `aria-label` accessibility support.

#### Props

| Prop        | Type               | Default     | Description                                                                                      |
| :---------- | :----------------- | :---------- | :----------------------------------------------------------------------------------------------- |
| `ariaLabel` | `string \| number` | `undefined` | Accessible label (`aria-label`) for screen readers, especially when rendering icon-only buttons. |
| `variant`   | `UIButtonVariant`  | `'primary'` | Visual style variant of the button.                                                              |
| `size`      | `UISize`           | `'lg'`      | Button size preset (`sm`, `md`, `lg`, etc.).                                                     |
| `type`      | `UIButtonType`     | `'button'`  | Native HTML button type (`'button'`, `'submit'`, `'reset'`).                                     |
| `loading`   | `boolean`          | `false`     | Replaces content with a spinner and sets `aria-busy="true"`.                                     |
| `disabled`  | `boolean`          | `false`     | Disables the button and applies the native `disabled` attribute.                                 |

#### Emits

_This component does not emit custom events (native `click` events propagate to the root `<button>`)._

#### Slots

| Slot      | Description                                                                                           |
| :-------- | :---------------------------------------------------------------------------------------------------- |
| `default` | Primary icon content rendered inside the button when not loading.                                     |
| `text`    | Optional label text rendered alongside the icon; automatically applies the `has-text` modifier class. |

---

### 🟢 MukInput 🟢

A form input component supporting `v-model` binding (with automatic number casting when `type="number"`), label, helper hint, validation error message, accessibility attributes (`aria-invalid`, `aria-describedby`), and an optional password visibility toggle.

#### Props

| Prop                 | Type                            | Default     | Description                                                                                                    |
| :------------------- | :------------------------------ | :---------- | :------------------------------------------------------------------------------------------------------------- |
| `modelValue`         | `string \| number \| undefined` | —           | Bound input value (`v-model`).                                                                                 |
| `label`              | `string`                        | `undefined` | Optional field label rendered above the input and linked via `for`/`id`.                                       |
| `placeholder`        | `string`                        | `undefined` | Placeholder text shown when the input is empty.                                                                |
| `hint`               | `string`                        | `undefined` | Helper text displayed below the input when `error` is not set.                                                 |
| `error`              | `string`                        | `undefined` | Validation error message; marks the input as invalid (`is-error`, `aria-invalid="true"`) and overrides `hint`. |
| `disabled`           | `boolean`                       | `false`     | Disables the input field and prevents user interaction.                                                        |
| `type`               | `UIInputType`                   | `'text'`    | Input type (e.g., `'text'`, `'password'`, `'number'`, `'email'`, etc.).                                        |
| `autocomplete`       | `string`                        | `undefined` | Native browser `autocomplete` attribute value.                                                                 |
| `showPasswordToggle` | `boolean`                       | `true`      | Shows or hides the password visibility toggle button when `type="password"`.                                   |

#### Emits

| Event               | Payload                   | Description                                                                                   |
| :------------------ | :------------------------ | :-------------------------------------------------------------------------------------------- |
| `update:modelValue` | `value: string \| number` | Emitted on input change; converts non-empty values to `Number` when input type is `'number'`. |

#### Slots

_This component does not define custom slots._

---

### 🟢 MukCheckbox 🟢

A styled checkbox form control supporting `v-model` boolean binding, side label, helper hint, validation error message, and accessibility attributes (`aria-invalid`, `aria-describedby`).

#### Props

| Prop         | Type      | Default     | Description                                                                                          |
| :----------- | :-------- | :---------- | :--------------------------------------------------------------------------------------------------- |
| `modelValue` | `boolean` | `false`     | Checked state bound via `v-model`.                                                                   |
| `label`      | `string`  | `undefined` | Optional label text rendered alongside the checkbox box.                                             |
| `hint`       | `string`  | `undefined` | Helper text shown below the control when `error` is not set.                                         |
| `error`      | `string`  | `undefined` | Validation error message; applies the `is-error` state (`aria-invalid="true"`) and overrides `hint`. |
| `disabled`   | `boolean` | `false`     | Disables the checkbox and prevents toggling.                                                         |

#### Emits

| Event               | Payload          | Description                              |
| :------------------ | :--------------- | :--------------------------------------- |
| `update:modelValue` | `value: boolean` | Emitted when the checkbox state changes. |

### Slots

_This component does not define custom slots._

### 🟢 MukRadio 🟢

A styled radio button control supporting `v-model` binding across primitive value types (`boolean`, `string`, `number`), native group naming, side label, helper hint, validation error state, and accessibility attributes (`aria-invalid`, `aria-describedby`).

#### Props

| Prop         | Type                                  | Default     | Description                                                                                          |
| :----------- | :------------------------------------ | :---------- | :--------------------------------------------------------------------------------------------------- |
| `modelValue` | `boolean \| string \| number \| null` | —           | Currently selected value of the radio group (`v-model`).                                             |
| `value`      | `boolean \| string \| number`         | —           | Value emitted and matched against `modelValue` when this radio option is selected.                   |
| `name`       | `string`                              | —           | Native HTML `name` attribute used to group related radio buttons.                                    |
| `label`      | `string`                              | `undefined` | Optional label text rendered alongside the radio indicator.                                          |
| `hint`       | `string`                              | `undefined` | Helper text displayed below the control when `error` is not set.                                     |
| `error`      | `string`                              | `undefined` | Validation error message; applies the `is-error` state (`aria-invalid="true"`) and overrides `hint`. |
| `disabled`   | `boolean`                             | `false`     | Disables the radio button and prevents selection.                                                    |

#### Emits

| Event               | Payload                              | Description                                      |
| :------------------ | :----------------------------------- | :----------------------------------------------- |
| `update:modelValue` | `value: boolean \| string \| number` | Emitted with the option's `value` when selected. |

#### Slots

_This component does not define custom slots._

---

### 🟢 MukSelect 🟢

A select dropdown form control built around a native `<select>` element, supporting `v-model` binding, structured options, placeholder, label, helper hint, validation error state, and accessibility attributes (`aria-invalid`, `aria-describedby`).

#### Props

| Prop          | Type               | Default     | Description                                                                                          |
| :------------ | :----------------- | :---------- | :--------------------------------------------------------------------------------------------------- |
| `modelValue`  | `string \| number` | `""`        | Selected value bound via `v-model`.                                                                  |
| `options`     | `Option[]`         | —           | Array of selectable options (`{ label: string; value: string \| number }`).                          |
| `label`       | `string`           | `undefined` | Optional label text rendered above the select and linked via `for`/`id`.                             |
| `placeholder` | `string`           | `undefined` | Disabled empty-value option rendered first when provided.                                            |
| `hint`        | `string`           | `undefined` | Helper text displayed below the field when `error` is not set.                                       |
| `error`       | `string`           | `undefined` | Validation error message; applies the `is-error` state (`aria-invalid="true"`) and overrides `hint`. |
| `disabled`    | `boolean`          | `false`     | Disables the select element and prevents interaction.                                                |

#### Emits

| Event               | Payload                   | Description                                             |
| :------------------ | :------------------------ | :------------------------------------------------------ |
| `update:modelValue` | `value: string \| number` | Emitted with the newly selected option value on change. |

#### Slots

_This component does not define custom slots._

### 🟢 MukTextarea 🟢

A multi-line text input component built around a native `<textarea>` element, supporting `v-model` binding, configurable visible row count, label, helper hint, validation error state, and accessibility attributes (`aria-invalid`, `aria-describedby`).

#### Props

| Prop          | Type                  | Default     | Description                                                                                          |
| :------------ | :-------------------- | :---------- | :--------------------------------------------------------------------------------------------------- |
| `modelValue`  | `string \| undefined` | `""`        | Bound text value (`v-model`).                                                                        |
| `rows`        | `number`              | `6`         | Number of visible text lines (`rows` attribute).                                                     |
| `label`       | `string`              | `undefined` | Optional label text rendered above the textarea and linked via `for`/`id`.                           |
| `placeholder` | `string`              | `undefined` | Placeholder text shown when the field is empty.                                                      |
| `hint`        | `string`              | `undefined` | Helper text displayed below the textarea when `error` is not set.                                    |
| `error`       | `string`              | `undefined` | Validation error message; applies the `is-error` state (`aria-invalid="true"`) and overrides `hint`. |
| `disabled`    | `boolean`             | `false`     | Disables the textarea and prevents user interaction.                                                 |

#### Emits

| Event               | Payload         | Description                                               |
| :------------------ | :-------------- | :-------------------------------------------------------- |
| `update:modelValue` | `value: string` | Emitted on input change with the updated textarea string. |

#### Slots

## _This component does not define custom slots._

### 🟢 MukEmptyState 🟢

An empty-state placeholder component displaying a heading and description with visual variants, customizable dimensions (`width` and `height` formatted via `formatSize`), and an optional action slot.

#### Props

| Prop          | Type                  | Default                                                                            | Description                                                    |
| :------------ | :-------------------- | :--------------------------------------------------------------------------------- | :------------------------------------------------------------- |
| `title`       | `string`              | `"No data available"`                                                              | Heading text rendered inside an `h3` via `MukText`.            |
| `description` | `string`              | `'There is nothing to display here at the moment. Please try refreshing the page'` | Supporting body message describing the empty state.            |
| `variant`     | `UIEmptyStateVariant` | `'secondary'`                                                                      | Visual style variant applied as `muk-empty-state--${variant}`. |
| `width`       | `string \| number`    | `undefined`                                                                        | Custom container width normalized with `formatSize`.           |
| `height`      | `string \| number`    | `undefined`                                                                        | Custom container height normalized with `formatSize`.          |

#### Emits

_This component does not emit custom events._

#### Slots

| Slot     | Description                                                                                      |
| :------- | :----------------------------------------------------------------------------------------------- |
| `action` | Optional action controls (such as a button or link) rendered inside `.muk-empty-state__actions`. |

---

### 🟢 MukErrorState 🟢

---

### 🟢 MukSkeleton 🟢

---

### 🟢 MukBadge 🟢

---

### 🟢 MukToast 🟢

---

### 🟢 MukModal 🟢

---

### 🟢 MukCommentItem 🟢

---

### 🟢 MukCommentForm 🟢

---

### 🟢 MukMetricCard 🟢

---

### 🟢 MukPagination 🟢

---

## UI Types

Shared TypeScript union types used across `modular-ui-kit-vue` components for variants, sizes, typography, controls, and loading placeholders. Importing and re-exporting them from your package entry lets consumers type component props, wrappers, and form state safely.

### Base & Layout Types

| Type        | Values                                                           | Used By                                                          |
| :---------- | :--------------------------------------------------------------- | :--------------------------------------------------------------- |
| `UIVariant` | `'primary' \| 'danger' \| 'warning' \| 'success' \| 'secondary'` | Base semantic palette for buttons, text variants, and extensions |
| `UISize`    | `'sm' \| 'md' \| 'lg'`                                           | Size presets across interactive controls (such as buttons)       |

### Typography Types

| Type            | Values                                                                                | Used By                                             |
| :-------------- | :------------------------------------------------------------------------------------ | :-------------------------------------------------- |
| `UITextType`    | `'muk-heading' \| 'muk-subheading' \| 'muk-body-text' \| 'muk-caption' \| 'muk-none'` | Typography scale and semantic text role (`MukText`) |
| `UITextAlign`   | `'left' \| 'center' \| 'right'`                                                       | Horizontal text alignment (`MukText`)               |
| `UITextVariant` | `UIVariant \| 'muted'`                                                                | Text color variant (`MukText`)                      |

### Component-Specific Types

| Type                  | Values                                                                       | Used By                                                    |
| :-------------------- | :--------------------------------------------------------------------------- | :--------------------------------------------------------- |
| `UIButtonVariant`     | `UIVariant \| 'ghost'`                                                       | Button visual style variant (`MukButton`, `MukButtonIcon`) |
| `UIButtonType`        | `'button' \| 'submit' \| 'reset'`                                            | Native HTML button behavior (`MukButton`, `MukButtonIcon`) |
| `UIEmptyStateVariant` | `'secondary' \| 'primary'`                                                   | Surface variant for empty states (`MukEmptyState`)         |
| `UIInputType`         | `'text' \| 'email' \| 'password' \| 'search' \| 'date' \| 'tel' \| 'number'` | Input field mode (`MukInput`)                              |
| `UISkeletonType`      | `'text' \| 'circle' \| 'rect'`                                               | Skeleton placeholder shape                                 |
