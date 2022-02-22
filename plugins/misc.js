export default ({ app, store }, inject) => {

    const methods = {

        makeData(object)
        {
            const data = new FormData();
            for(const [k,v] of Object.entries(object))
            {
                data.append(k,v);
            }
            return data;
        }

    };

    inject('misc', methods);

}