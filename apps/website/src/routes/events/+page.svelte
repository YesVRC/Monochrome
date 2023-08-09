<script>
    export const get = async () => {
        const res = await fetch('https://api.monovrc.com/api/files/posters', {method: 'GET'});
        if (res['urls']) return res;
        else return null;
    };
</script>
{#await get() then res}
    <div class="w-full h-full flex flex-row flex-wrap ">
        {#each Object.values(res) as f}
            <div class="neon-surface card-hover hover:neon-success aspect-auto w-[50%] md:w-[30%] lg:w-[25%] xl:w-[15%] mx-auto my-3 p-1 rounded-xl ">
                <img src={f} class="w-fit"/>
            </div>
        {/each}
    </div>
{/await}



