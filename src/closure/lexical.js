const buildCount = (i) => {
    let cont = i;
    const displayCont = () => {
        console.log(cont++);
    }
    return displayCont;
}

const myConst = buildCount(1);
myConst();
myConst();
myConst();

const myOtherConst = buildCount(10);
myOtherConst();
myOtherConst();
myOtherConst();