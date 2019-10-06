
import image1 from '../../assets/img/image1.jpg';
import image2 from '../../assets/img/image2.jpg';
import image3 from '../../assets/img/image3.jpg';
import image4 from '../../assets/img/image4.jpg';
import image5 from '../../assets/img/image5.jpg';
import image6 from '../../assets/img/image6.jpg';
import image7 from '../../assets/img/image7.jpg';
import image8 from '../../assets/img/image8.jpg';
import image9 from '../../assets/img/image9.jpg';

class ShowGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [
                image1,
                image2,
                image3,
                image4,
                image5,
                image6,
                image7,
                image8,
                image9
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    }

    render() {
        const images = this.state.urls.map((url) => {
            return <div className="col-sm-4 p-3" key={url}>
                <img className="img-fluid image" src={url} alt={this.state.description}/>
                <span className="description">
                    <span className="d-inline-block text-truncate" style={{"maxWidth": "500px"}} data-toggle="tooltip"
                          data-placement="right" title={this.state.description}>{this.state.description}</span>
                </span>
            </div>
        });
        const options = {scalable: false, zoomable: false, title: false, toolbar: 10};

        return (
            <div className="jumbotron bg-light">
                <div className="panel-body">
                    <RcViewer options={options} ref='viewer'>
                        <div className="row">
                            {images}
                        </div>
                    </RcViewer>
                </div>
            </div>
        );
    }
}

export default ShowGallery;