export const sample = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1)=>{
    const arr = []
    if(end === undefined){
        end=start;
        start=0;
    }
    for (let i = start; i < end; i += step) {
        arr.push(i)
    }
    return arr;
}
