import { createRouter, createMemoryHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Vbind from "../views/VBind.vue";
import VFor from "../views/VFor.vue";
import VIfElse from "@/views/VIfElse.vue";
import VShow from "@/views/VShow.vue";
import VOn from "@/views/VOn.vue";
import Ref from "@/views/Ref.vue";
import Computed from "@/views/Computed.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/v-bind',
        component: Vbind
    },
    {
        path: '/v-for',
        component: VFor
    },
    {
        path: '/v-if',
        component: VIfElse
    },
    {
        path: '/v-show',
        component: VShow
    },
    {
        path: '/v-on',
        component: VOn
    },
    {
        path: '/ref',
        component: Ref
    },
    {
        path: '/computed',
        component: Computed
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router;