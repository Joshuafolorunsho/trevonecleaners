<script>
	import LinkButton from '$lib/linkButton.svelte';
	import heroBg from '$lib/assets/home-hero.png';
	import Button from '$lib/button.svelte';
	import Title from '$lib/title.svelte';
</script>

<section
	style="background-image: url({heroBg});"
	class="h-[calc(100vh-96px)] bg-cover bg-no-repeat text-white"
>
	<div
		class="flex flex-col justify-center items-center text-center max-w-3xl mx-auto p-16 px-5 sm:px-10 md:px-0 h-full"
	>
		<h1 class="text-5xl font-black font-lato">
			Making Your <span class="text-primary-100">Space</span> Spotless with Expert Cleaning Solutions.
		</h1>
		<p class="text-2xl font-medium my-6">
			At Trevone, we believe that a clean space is a happy space. That's why we offer a wide range
			of cleaning services to help keep your home or office looking its best.d
		</p>
		<div class="flex items-center space-x-5">
			<Button>Book us online now</Button>
			<LinkButton classes="text-white" variant="outline">Learn more about us</LinkButton>
		</div>
	</div>
</section>

<section class="py-10 sm:py-16 bg-gray-50">
    <div class="container mx-auto">
        <Title subTitle="Benefit from our top-notch cleaning services that leave you satisfied.">
            Experience complete satisfaction with our exceptional cleaning services.
        </Title>
    </div>
</section>
