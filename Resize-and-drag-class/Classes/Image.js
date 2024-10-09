

class Image extends View
{

    constructor(src)
    {
        super('200px', '200px', 'blue', '');

        this.div.style.backgroundImage = `url('${src}')`;
        this.div.style.backgroundSize = "cover";
    

    }
}