<template>
  <div>
      <h3>Add Todo</h3>
      <div class="add">
          <form>
              <input type="text" v-model="title" placeholder="Add To do...">
              <input type="submit" value="Submit">
          </form>
      </div>
  </div>
</template>

<script>
export default {
    name: "AddTodo"
}
</script>

<style scoped>


</style>