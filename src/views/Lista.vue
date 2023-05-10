<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <ul>
            <li v-for="activity in activities" :key="activity.id">
                <router-link :to="`/activity/${activity.id}`">{{ activity.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'ActivitiesView',
    data() {
        return {
            title: 'Activities',
            description: 'List of activities',
            activities: [
                { id: 1, name: 'Research paper' },
                { id: 2, name: 'Program development' },
                { id: 3, name: 'Video presentation' }
            ]
        }
    }
}
</script>
  
<style scoped>
h1 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
}

p {
    font-size: 16px;
    color: #777;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
}

a {
    text-decoration: none;
    color: #0077ff;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
}

a:hover {
    color: #0051a6;
}
</style>
  