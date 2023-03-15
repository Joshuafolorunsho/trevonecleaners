<script>
	import clsx from 'clsx';

	export let variant = 'primary';
	export let classes = '';
</script>

<button
	class={clsx(
		'py-2 px-5 rounded-full border border-primary font-medium font-open-sans',
		variant === 'primary' && 'bg-primary text-white',
		variant === 'outline' && 'border-primary text-gray-950',
        classes
	)}
>
	<slot />
</button>
