let defaultCity = '北京';
try {
    let city = localStorage.getItem('city');
    if(city)
    {
        defaultCity = city;
    }
}catch(e) {

}

export default {
city:defaultCity
}