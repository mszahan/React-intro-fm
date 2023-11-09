import { Component } from "react";

class Carousel extends Component {
    state = {
        active:0,
    };

    static defaultProps = {
        images: []
    };

    render() {
        const {active} = this.state;
        const {images} = this.props;
        return(
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        <img src={photo}
                        alt="animal thumbain"
                        key={photo}
                        className={index === active ? 'active' : ''}/>
                    ))}
                </div>
            </div>
        )
    }

}

export default Carousel;