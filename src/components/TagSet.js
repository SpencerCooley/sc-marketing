import React from 'react';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';

let TagSet = (props) =>{
 const {category, tags, chipStyle} = props;

 return(

  <section>
  <h4>{category}:</h4>
      {tags.map(function(tag, i){
        return <Chip label={tag} className={chipStyle} />;
       })}
  </section>
 )
}

TagSet.propTypes = {
  category: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
};

export default TagSet;
