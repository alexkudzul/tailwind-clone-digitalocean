Vue.component('link-cascadia', {
  template: `
  <!-- Cuando necesite diseñar un elemento en función del estado de
  algún elemento principal, marque el elemento principal con la
  group clase y use group-* modificadores como group-hover para
  diseñar el elemento de destino -->

  <a
  class="group flex items-center text-lg text-do-blue-light hover:text-do-blue-medium font-cascadia font-bold"
  href=""
  >
  <slot></slot>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 group-hover:ml-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 5l7 7-7 7"
    />
  </svg>
</a>
  `,
});

new Vue({
  el: '#app',
});
