<template>
  <nav id="nav">
    <div>
      <ul class="links left">
        <li class="link"><router-link to="/">AngelDev</router-link></li>
      </ul>
    </div>
    <div>
      <ul class="links right">
        <li class="link"><router-link to="/translate">Переводчику</router-link></li>
        <li class="link"><router-link to="/editor">Редактору</router-link></li>
        <li class="link"><router-link to="/cleaner">Клинеру</router-link></li>
        <li class="link"><router-link to="/typesetter">Тайперу</router-link></li>
        <li class="link"><router-link to="/discord">Discord</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  margin: 0;
  padding: 0;
  font: 1rem 'Roboto', sans-serif;
  border-bottom: 1px solid #e2e3e7;

  display: flex;
  align-content: space-around;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
}
ul {
  list-style: none;
  list-style-image: none;
  padding: 0;
  margin: 0;
  text-align: center;
  background: none;
  backface-visibility: hidden;
}
.left li {
  margin-left: 1rem;
}
.right li {
  margin-right: 1rem;
}
.left li,
.right li {
  padding: 1rem 0 0 0;
}
li {
  display: inline;
}
li:not(:last-child)::after {
  color: rgba(0, 0, 0, 0.5);
  margin-left: 1rem;
  content: '•'
}
a:link {
  transition: color 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
a:link,
a:visited {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
a.active {
  pointer-events: none;
  color: #111 !important;
}
a:hover {
  color: #00bfff;
}
.link + .link {
  padding-top: 1rem;
}
img {
  width: 5rem;
  height: auto;
  border-radius: 50%;
}
</style>
