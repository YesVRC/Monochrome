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

    import '../theme.css';
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
                <!--<a class="cursor-pointer neon-text-surface hover:neon-text-primary p-4" href="/about">About</a>-->
                <a class="cursor-pointer neon-text-surface hover:neon-text-primary p-4" href="/events">Events</a>
            </div>
        </AppBar>
    </svelte:fragment>
        <slot/>
    <img src="/stacked-waves-haikei_inv.svg" class="opacity-30 fixed bottom-0 left-0 w-full z-[-1]"/>


    <!-- Page Route Content -->
    <Modal/>
    <Toast/>

</AppShell>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>MonoVRC</title>
    <meta name="title" content="MonoVRC" />
    <meta name="description" content="Events, Unity Help, and more!" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://www.monovrc.com/" />
    <meta property="og:title" content="MonoVRC" />
    <meta property="og:description" content="Events, Unity Help, and more!" />
    <meta property="og:image" content="https://content.monovrc.com/monovrc/v3_VRC_Background.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="http://www.monovrc.com/" />
    <meta property="twitter:title" content="MonoVRC" />
    <meta property="twitter:description" content="Events, Unity Help, and more!" />
    <meta property="twitter:image" content="https://content.monovrc.com/monovrc/v3_VRC_Background.png" />
    <meta content="#2c2c2c" data-react-helmet="true" name="theme-color" />


    <!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>
