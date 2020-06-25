import React from 'react';
import PropTypes from 'prop-types';

import StyledEquipmentCard from './styles/StyledEquipmentCard';

const EquipmentCard = props => {
  return (
    <StyledEquipmentCard>
      <div className="equipment-img">
        <img src={props.equipmentImg} alt="equipment picture" />
      </div>
      <span className="equipment-name">{props.equipmentName}</span>
    </StyledEquipmentCard>
  );
};

EquipmentCard.propTypes = {
  equipmentImg: PropTypes.string,
  equipmentName: PropTypes.string,
};

EquipmentCard.defaultProps = {};

export default EquipmentCard;
