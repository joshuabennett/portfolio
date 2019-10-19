<template>
    <div class='about has-text-centered'>
        <p class='hello float1'>Hi, I'm <span class='name'>JOSHUA BENNETT</span></p><p class='hello float2'> I'm a self taught <bold>Front-End Web Developer</bold> located in <span class="city">Austin, Texas</span> looking for an opportunity as a intern or full-time position as a <bold>Junior Web Developer</bold></p>
        <div class="circle-container">
            <div class="circle">
                <a href='https://github.com/joshuabennett'><img :src="'assets/icon-github.png'"></a>
            </div>
            <div class="circle">
                <a href='https://www.linkedin.com/in/joshua-bennett-9b964257/'><img :src="'assets/icon-linkedin.png'"></a>
            </div>
            <div class="circle">
                <a href='mailto:joshuabennett@utexas.edu'><img :src="'assets/icon-gmail.svg'"></a>
            </div>
        </div>
        <p class='hello'>I'm ok at these</p>
        <div class="smaller-circle"></div>
        <div class="logo-container">
            <div class="item" v-for='item in images'>
                <img class='logo' :src="'assets/'+item">
                <p>{{ filterName(item) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            images: ['icon-css3.svg', 'icon-git.svg', 'icon-html5.svg', 'icon-js.svg', 'icon-photoshop.svg', 'icon-sass.svg', 'icon-vscode.svg', 'icon-vue.svg' ]
        }
    },
    methods: {
        filterName(item) {
            var str = item.substring(item.indexOf('-') + 1, item.indexOf('.'));
            return str;
        }
    }
}
</script>

<style>
.circle-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.circle {
    padding: 5px;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background: rgba(0,0,0,0.5);
    margin: 1em;
}
bold {
    font-weight: bold;
}
.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 25px 50px 25px 50px;
      position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.name {
    text-transform: uppercase;
    margin: 10px;
    color: white;
    font-family: 'Gudea', sans-serif;
    font-size: calc(16px + 0.75vw);
    letter-spacing: calc(1px + .2vw);
    font-weight: bold;
}
p {
    color: white;
    font-family: 'Gudea', sans-serif;
    font-size: calc(10px + .4vw);
}
.hello {
    background: rgba(0,0,0,0.5);
    padding: 10px 10px 10px 10px;
    border-radius: 15px;
    margin: 5px;
    transform: translatey(0px);
}
.float1 {
    animation: float 5s ease-in-out infinite;
}
.float2 {
    animation: float2 6s ease-in-out infinite;
}
.city {
    color: pink;
    font-weight: bold;
}
.logo-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

}
.logo {
    width: 100%;
    height: 100%;
    margin: 10px;
    width: 50px;
    max-height: 55px;
    fill: white;
}
br {
    color: white;
}
.item p {
    text-transform: uppercase;
    font-size: 12px;
}
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-7px);
	}
	100% {

		transform: translatey(0px);
	}
}
@keyframes float2 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(5px);
	}
	100% {

		transform: translatey(0px);
	}
}
.break {
    margin: 30px 100px 30px 100px;
}

@media only screen and (max-width: 1336px) {
    body, html, #app {
        overflow: auto;
    }   
    .about {
        transform: translateY(0);
        top: 0;
    }
}
</style>