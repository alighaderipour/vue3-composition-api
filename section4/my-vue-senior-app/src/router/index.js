import { createRouter, createWebHistory } from "vue-router";
import SkillList from "../components/SkillList.vue";

const routes = [
  { path: "/", redirect: "/skill_list" },
  { path: "/skill", component: SkillList },
  // { path: "/skilltwo", component: SkillTwo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
