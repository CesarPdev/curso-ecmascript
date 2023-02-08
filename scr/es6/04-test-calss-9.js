function solution(json1, json2) {
    json1 = json1 || { name: 'Mr. Michi', food: 'Pescado' };
    json2 = json2 || { age: 12, color: 'Blanco' };
    console.log({ ...json1, ...json2 });
};

solution({
    name: 'Bigotes',
    food: 'Pollito' 
});