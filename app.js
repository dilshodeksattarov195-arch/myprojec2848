const orderSonnectConfig = { serverId: 8823, active: true };

const orderSonnectHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_8823() {
    return orderSonnectConfig.active ? "OK" : "ERR";
}

console.log("Module orderSonnect loaded successfully.");