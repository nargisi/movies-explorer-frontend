import '../InfoToolTip/InfoToolTip.css';
import checkMark from '../../images/Check_mark.svg';
import closeCross from '../../images/Close_cross.svg';

const InfoToolTip = (props) => {
  const { onStatusChange, registerStatus } = props;
  const classList = `popup popup_tooltip ${
    registerStatus ? 'popup_opened' : ''
  }`;
  return (
    <div className={classList}>
      <div className="popup__container popup__container_type_tooltip">
        <button
          onClick={() => onStatusChange('')}
          className="popup__close popup__close_type_tooltip"
          type="button"
        ></button>
        <img
          className="popup__tooltip-image"
          src={registerStatus === 'success' ? checkMark : closeCross}
          alt={registerStatus === 'success' ? 'Галочка' : 'Крестик закрытия'}
        />
        {
          <p className="popup__tooltip-message">
            {registerStatus === 'success'
              ? 'Вы успешно зарегистрировались!'
              : 'Что-то пошло не так! Попробуйте еще раз!'}
          </p>
        }
      </div>
    </div>
  );
};

export default InfoToolTip;
