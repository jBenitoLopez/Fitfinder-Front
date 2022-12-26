<script>
  export let name;
  export let outlined = false;
  export let outlineColor = "gray";
  export let round = false;
  export let size = 20;
  export let color = "black";
  export let bgColor = "transparent";
  export let leftRound = false;
  export let rightRound = false;
</script>

<span
  class="material-symbols-outlined icon"
  class:outlined
  class:round
  class:leftRound
  class:rightRound
  style={`font-size:${size}px;color:${color};background-color:${bgColor};border-color:${outlineColor} `}
>
  {name}
</span>

<style>
  .icon {
    cursor: pointer;
  }
  .outlined {
    border: 1px solid lightgray;
  }
  .round {
    border-radius: 7px;
  }
  .leftRound {
    border-radius: 7px 0 0 7px;
  }
  .rightRound {
    border-radius: 0 7px 7px 0;
  }
</style>
