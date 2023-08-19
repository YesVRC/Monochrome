<script lang="ts">
    async function fet() {
        const res = await fetch('https://api.monovrc.com/api/files/posters', {method: 'GET'});
        const ret = await res.json();
        const arr = [];
        for (const url of ret.urls){
            const split = url.split('/')
            const put = {url: url, alt: split[split.length - 1]};
            arr.push(put);
        }
        return arr;
    };
</script>
{#await fet() then ret }
    <div class="w-full h-full flex flex-row flex-wrap ">
        {#each ret as res}
            <div class="neon-surface card-hover hover:neon-success aspect-auto w-[50%] md:w-[30%] lg:w-[25%] xl:w-[15%] mx-auto my-3 p-1 rounded-xl ">
                <img src={res.url} alt={res.alt} class="w-fit"/>
            </div>
        {/each}
    </div>
{/await}



