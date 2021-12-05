import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
    name: PropTypes.string,
};

Hero.defaultProps = {
    name: '',
};

function Hero(props) {
    const { name } = props;
    console.log('name: ', name);
    return (
        <div>
            Name: {name}
        </div>
    );
}

export default React.memo(Hero); // trường hợp đặc biệt, hiếm sử dụng, nặng

// kĩ thuật Memoization: lưu lại lần kết quả của lần render trước,
// và sử dung, thay vì phải thực hiện tính toán lại ,nếu lần sau có trùng vói lần trước
// sử dụng H.O.C react.memo để tránh việc Rerender lại 
// TH, có sử dụng hàm handle Click trong props app, sẽ rerender lại props