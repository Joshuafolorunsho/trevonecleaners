<script>
	import Button from "./button.svelte";
	import logo from "$lib/assets/logo.png"

	const navItems = [
		{ name: 'About', href: '/' },
		{ name: 'Our Services', href: '/' },
		{ name: 'Contact Us', href: '/' }
	];
</script>

<header class="flex justify-between items-center py-3 container mx-auto h-24">
	<a href="/">
		<img class="w-[164px] h-[64px]" src={logo} alt="trevone logo" />
	</a>
	<ul class="flex text-gray-850 items-center space-x-6 font-semibold">
		{#each navItems as item}
			<li>
				<a href={item.href}>{item.name}</a>
			</li>
		{/each}
		<Button>Book Now</Button>
		<Button classes="" variant="outline">+234 816 116 5891</Button>
	</ul>
</header>
