<template>
  <header>
    <nav class="navbar ">

      <div class="menu-item">

        <router-link to="HomePage">
          <img src="../assets/svg/home.svg" alt="">
        </router-link>

      </div>

      <div class="dropdown menu-item "  >

        <button class="dropdown-btn" @click="setActive(1)">
          VISITANTE
          <img src="../assets/svg/barret.svg" alt="">
        </button>

        <div :class="isActiveVisitor ? 'dropdown-content':'hidden'">

          <router-link class="sub-menu-item " to="">REGISTRAR</router-link>
          <router-link class="sub-menu-item" to="">BUSCAR</router-link>

        </div>
      </div>

      <div class="menu-item">
        <button class="dropdown-btn">
          <router-link to="">ACTIVOS</router-link>
        </button>
      </div>

      <div class="menu-item">
        <button class="dropdown-btn">
          <router-link to="">VERIFICAR</router-link>
        </button>
      </div>

      <div class="dropdown menu-item">
        <button class="dropdown-btn" @click="setActive(2)">
          ADMINISTRAR
          <img src="../assets/svg/barret.svg" alt="">
        </button>
        <div :class="isActiveAdmin ? 'dropdown-content':'hidden'">
          <router-link class="sub-menu-item" to="">OFICINA</router-link>
          <router-link class="sub-menu-item" to="">MOTIVO</router-link>
          <router-link class="sub-menu-item" to="">REPORTE</router-link>
        </div>
      </div>

      <div class="dropdown menu-item">

        <button class="dropdown-btn" @click="setActive(3)">
          USUARIO
          <img src="../assets/svg/barret.svg" alt="">
        </button>

        <div :class="isActiveUser ? 'dropdown-content':'hidden'">
          <router-link class="sub-menu-item" to="">REGISTRO</router-link>
          <router-link class="sub-menu-item" to="">PERMISOS</router-link>
        </div>

      </div>

      <div class="menu-item" id="logout-btn">
        <router-link to="">
          <img src="../assets/svg/logout.svg" alt="">
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {

    return {
      isActiveVisitor: false,
      isActiveAdmin: false,
      isActiveUser: false,
    }

  },
  methods: {
    setActive(btn) {
      if (btn === 1) {
        this.isActiveVisitor = !this.isActiveVisitor;
      } else if (btn === 2) {
        this.isActiveAdmin = !this.isActiveAdmin;

      } else if (btn === 3) {
        this.isActiveUser = !this.isActiveUser;

      }
    }


  }
}
</script>

<style scoped>

.navbar {
  height: 50px;
  width: 100%;
  @apply bg-deepblue text-xs text-white font-title font-bold flex flex-row flex-nowrap  justify-start  px-[79px] items-center drop-shadow-cs ;
}

.dropdown {
  position: relative;
}

.sub-menu-item {
  @apply h-[30px]  border border-b-firered border-x-transparent border-t-transparent w-[160px] hover:bg-firered
}

.dropdown-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: calc(100% + 17px);
  left: 5%;
  width: 160px;
  @apply bg-deepblue

}

.dropdown-btn {
  @apply font-bold font-title
}

.menu-item {
  @apply mx-2
}

nav img {
  display: inline-block;
}

nav a {
  text-decoration: none;
}

#logout-btn {

  margin-left: 55%;
}

</style>