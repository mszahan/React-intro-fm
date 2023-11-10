import { Component } from "react";

class Carousel extends Component {
    state = {
        active:0,
    };

    static defaultProps = {
        images: []
    };

    handleIndexClick = event => {
        this.setState({
            active: +event.target.dataset.index
        });
    };


    render() {
        const {active} = this.state;
        const {images} = this.props;
        return(
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                // eslint-disable-next-line
                        <img src={photo}
                        onClick={this.handleIndexClick}
                        data-index={index}
                        alt="animal thumbnail"
                        key={photo}
                        className={index === active ? 'active' : ''}/>
                    ))}
                </div>
            </div>
        )
    }

}

export default Carousel;