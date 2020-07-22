<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>
 
<Nav {segment}/>

<main>
	<script>
		import Grid from "svelte-grid-responsive";
	  </script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/superhero/bootstrap.min.css" integrity="sha384-rvwYMW9Z/bbxZfgxHQEKx6D91KwffWAG+XnsoYNCGWi/qL1P9dIVYm1HBiHFqQEt" crossorigin="anonymous">
	<slot></slot>
</main> 		