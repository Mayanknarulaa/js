const marvel_heros = [ "thor", "ironman", "spiderman"]
const dc_heros = [ "superman", "flash", "batman"]

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

// spread 

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)