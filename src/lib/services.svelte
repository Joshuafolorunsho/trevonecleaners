<script>
	import manCleaningFloorImg from './assets/home/man-cleaning-wall.png';
	import ladyCleaningMat from './assets/home/lady-cleaning-mat.png';
	import womanCleaningFloor from './assets/home/lady-cleaning-floor.png';
	import womanCleaningFloorTwo from './assets/home/lady-cleaning-floor-2.png';

	const services = [
		{
			imgUrl: manCleaningFloorImg,
			title: 'Janitorial/General Cleaning service'
		},
		{
			imgUrl: ladyCleaningMat,
			title: 'Carpet & Upholstery Cleaning'
		},
		{
			imgUrl: womanCleaningFloor,
			title: 'Industrial Cleaning'
		},
		{
			imgUrl: womanCleaningFloorTwo,
			title: 'Floor restoration & Cleaning'
		}
	];
</script>

<section class="flex flex-wrap gap-5 mt-12 justify-center">
	{#each services as service}
		<div
			style="background-image: url('{service.imgUrl}')"
			class="h-[448px] flex-1 rounded-3xl bg-cover relative text-white"
		>
			<div class="absolute rounded-3xl inset-0 bg-opacity-40 bg-[#544b4b]" />
			<div class="relative z-10 mt-[320px] px-6">
				<p>Cleaning | On Demand</p>
				<h2 class="font-bold text-2xl">{service.title}</h2>
			</div>
		</div>
	{/each}
</section>
