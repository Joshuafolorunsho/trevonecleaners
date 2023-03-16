<script>
	import clsx from 'clsx';

	export let variant = 'primary';
	export let classes = '';
	export let href = '/';
</script>

<a
	class={clsx(
		'py-3 px-5 rounded-full border border-primary-100 font-semibold font-open-sans',
		variant === 'primary' && 'bg-primary-100 text-white',
		variant === 'outline' && 'text-gray-950',
		classes
	)}
	{href}
>
	<slot />
</a>
