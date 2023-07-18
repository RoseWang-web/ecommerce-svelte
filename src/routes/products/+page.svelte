<script>
 export let data;
</script>
<main>
<table>
 <thead>
  <tr>
   <th>ID</th>
   <th>Name</th>
   <th>Price</th>
  </tr>
 </thead>
 <tbody>
  {#each data.products as product }
   <tr>
    <td>{product.id}</td>
    <td>{product.name}</td>
    <td>{product.price}</td>
   </tr>
 </tbody>
</table>

</main>