import { createRouter, createWebHistory } from "vue-router";
import Skill from "../views/Skill.vue";
import SkillTwo from "../views/SkillTwo.vue";

const routes = [
  { path: "/", redirect: "/skill" },
  { path: "/skill", component: Skill },
  { path: "/skilltwo", component: SkillTwo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
