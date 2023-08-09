<script lang="ts">


    import {
        AppBar,
        AppRail,
        AppRailTile,
        AppShell,
        Avatar,
        LightSwitch,
        Modal,
        Toast
    } from "@skeletonlabs/skeleton";
    import type {PopupSettings} from "@skeletonlabs/skeleton";

    import '../theme.css'
    import '@skeletonlabs/skeleton/styles/all.css';
    import '../app.postcss';
    import {posterStore} from "../store/store.js";
    // Depedency: Floating UI
    import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
    import {popup,storePopup} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";

    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    const popupUser: PopupSettings = {
        event: 'click',
        target: 'popupUser',
        placement: 'bottom',
    };

</script>


<!-- App Shell -->
<AppShell>

    <svelte:fragment slot="header">
        <!-- App Bar -->
        <AppBar
            slotDefault="h-full"
            gridColumns="grid-cols-[1fr_3fr_1fr]"
            slotTrail=" h-full justify-center m-0"
        >
            <svelte:fragment slot="lead">
                <a href="/">
                    <strong class="text-xl uppercase neon-text-surface hover:neon-text-primary px-1 rounded-xl">Monochrome</strong>
                </a>
            </svelte:fragment>

            <div class="m-auto w-fit h-full flex flex-row text-center">
                <a class="cursor-pointer neon-text-surface hover:neon-text-primary p-4" href="/connect">Connect</a>
                <a class="cursor-pointer neon-text-surface hover:neon-text-primary p-4" href="/about">About</a>
                <a class="cursor-pointer neon-text-surface hover:neon-text-primary p-4" href="/events">Events</a>
            </div>
        </AppBar>
    </svelte:fragment>
    <slot/>
    <!-- Page Route Content -->
    <Modal/>
    <Toast/>

</AppShell>

<svelte:head>
    <title>MonoVRC</title>
    <meta content="Monochrome VRC" property="og:title" />
    <meta content="Events, Unity Help, and more!" property="og:description" />
    <meta content="https://monovrc.com" property="og:url" />
    <meta content="/favico" property="og:image" />
    <meta name="twitter:card" content="summary_large_image">
    <meta content="#9900FF" data-react-helmet="true" name="theme-color" />
</svelte:head>
