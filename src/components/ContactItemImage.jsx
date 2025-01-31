import PropTypes from 'prop-types'
function ContactItemImage({imageUrl}){
    return (
        <div className="contact-item__image">
            <img src={imageUrl} alt='contact avatar'></img>
        </div>
    );
}

ContactItemImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    
};

export default ContactItemImage;