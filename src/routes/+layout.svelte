<script>
	import '../app.css';
</script>
<main class="flex flex-col min-h-screen">
	<header>
		<h1 class="p-4 bg-slate-300">Welcome</h1>
	</header>
	<div class="flex-grow">
		<slot />
	</div>
	<footer class="p-4 bg-orange-300">
		footer is here
	</footer>
</main>