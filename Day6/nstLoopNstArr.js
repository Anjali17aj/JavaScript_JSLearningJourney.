let heroes = [["ironman","spiderman","thor"],["Captain America","wonder woman","flash"]];
for(let i=0; i<heroes.length; i++){ //length=0 and 1
    console.log(`list #${i}`);
    for(let j=0; j<heroes[i].length; j++){
        console.log(`j=${j},  ${heroes[i][j]}`);
    }
}