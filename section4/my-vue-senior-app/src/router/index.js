import { createRouter, createWebHistory } from "vue-router";
import SkillList from "../components/SkillList.vue";

const routes = [
  { path: "/", redirect: "/skill_list" },
  { path: "/skill_list", component: SkillList },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
