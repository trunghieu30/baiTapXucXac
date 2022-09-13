import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac'

export default class BTXucXac extends Component {
    render() {
        return (
            <div className='h-screen' style={{ background: 'url(./images/BTXucXac/bgGame.png)' }}>
                <div className='max-w-7xl m-auto' >
                    {/* <h1 className='text-center text-40'>GAME ĐỔ XÚC XẮC</h1>
                <div className='flex gap-40 justify-center mt-20'>
                    <div className='w-20 h-[120px] rounded-sm bg-blue-300 flex items-center justify-center text-white font-blod text-40'>Tài</div>
                    <div className='flex'>
                        <img src="./images/BTXucXac/1.png" alt="" className='w-[120px] object-cover object-center' />
                        <img src="./images/BTXucXac/2.png" alt="" className='w-[120px] object-cover object-center' />
                        <img src="./images/BTXucXac/3.png" alt="" className='w-[120px] object-cover object-center' />
                    </div>
                    <div className='w-20 h-[120px] rounded-sm bg-blue-300 flex items-center justify-center text-white font-blod text-40'>Xỉu</div>
                </div> */}
                    <XucXac />
                    {/* <div className='mt-[20px] text-center'>
                    <p className='text-[40px] font-bold'>Bạn chọn: Tài</p>
                    <p className='text-[40px] font-bold'>Số bàn thắng: 10</p>
                    <p className='text-[40px] font-bold'>Số bàn chơi: 10</p>
                    <button className='bg-green-400 px-16 py-7 text-[30px] text-white rounded-sm hover:br-green-700 text-center'>Play</button>
                </div> */}
                    <KetQua />
                </div>
            </div>
        )
    }
}
