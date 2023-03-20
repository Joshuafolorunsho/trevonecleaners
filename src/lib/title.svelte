<script>
    import clsx from 'clsx'
	export let classes = '';
	export let subTitle = '';
</script>

<div class={clsx("text-gray-950 text-center max-w-3xl mx-auto", classes)}>
	<h3 class="font-semibold text-4xl font-lato">
		<slot />
	</h3>
	{#if subTitle}
		<p class="font-open-sans mt-2">{subTitle}</p>
	{/if}
</div>
