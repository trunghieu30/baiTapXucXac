import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        const { ketQua: { isTai, soBanThang, soBanChoi } } = this.props
        return (
            <div>
                <div className='mt-[20px] text-center'>
                    <p className='text-[40px] font-bold'>Bạn chọn: <span className='text-red-500'>{isTai ? 'Chẵn' : 'Lẻ'}</span>
                    </p>
                    <p className='text-[40px] font-bold'>Số bàn thắng: {soBanThang}</p>
                    <p className='text-[40px] font-bold'>Số bàn chơi: {soBanChoi} </p>
                    <button className='bg-green-400 px-16 py-7 text-[30px] text-white rounded-sm hover:br-green-700 text-center' onClick={() => {
                        this.props.dispatch({
                            type: 'PLAY',
                        })
                    }}>Play</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.baiTapXucXac
    }
}
export default connect(mapStateToProps)(KetQua)
