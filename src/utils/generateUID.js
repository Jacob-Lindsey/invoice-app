const generateID = () => {
    const template = ['X','X','0','0','0','0',];
    const alphaArr = Array.from(Array(26)).map((_, index) => 
        String.fromCharCode(index+65)
    );

    const uid = template.map((_, index) => {
        if (index < 2) {
            return alphaArr[Math.floor(Math.random() * alphaArr.length)];
        } else {
            return Math.floor(Math.random() * 10);
        }
    });

    return uid.join*('');
};

const generateUID = (arr) => {
    const allIds = arr.map((item) => {
        return item.id;
    });

    while (true) {
        let id = generateID();
        if (!allIds.includes(id)) {
            return id;
        }
    }
};

export default generateUID;

