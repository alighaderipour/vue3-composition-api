pnpm create vite my-vue-senior-app -- --template vue  
cd my-vue-senior-app  
pnpm install  
pnpm run dev


src/
  components/
  composables/
  router/
  store/
  views/
  assets/
  utils/
  App.vue
  main.js
public/
.eslintrc.cjs
.prettierrc
vite.config.js
...



pnpm add -D eslint prettier eslint-plugin-vue eslint-config-prettier  
pnpm exec eslint --init  
# حین راه‌اندازی گزینه Vue 3 و import TypeScript فعال کن (یا بعداً اضافه)