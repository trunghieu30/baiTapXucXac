const stateDefault = {
    isTai: true,
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
        {
            hinhAnh: "./images/BTXucXac/1.png", diem: 1,
        },
        {
            hinhAnh: "./images/BTXucXac/2.png", diem: 2,
        },
        {
            hinhAnh: "./images/BTXucXac/3.png", diem: 3,
        }
    ],
}

export const baiTapXucXac = (state = stateDefault, { type, payload }) => {
    switch (type) {
        case 'DAT_CUOC': {
            state.isTai = payload
            return { ...state }
        }
        case 'PLAY': {
            // let newMangXucXac = []
            // for (let i = 0; i < 3; i++) {
            //     //Tạo số ngẫu nhiên từ 1 tới 6
            //     const number = Math.floor(Math.random() * 6) + 1;
            //     const xucXac = {
            //         hinhAnh: `./images/BTXucXac/${number}.png`,
            //         diem: number,
            //     }
            //     newMangXucXac.push(xucXac)
            // }

            //C2 
            const newMangXucXac = [...Array(3)].map((item) => {
                const number = Math.floor(Math.random() * 6) + 1;
                return {
                    hinhAnh: `./images/BTXucXac/${number}.png`,
                    diem: number,
                }
            })

            const total = newMangXucXac.reduce((sum, item) => {
                return sum += item.diem
            }, 0)
            // //Tính thắng thua tài,xỉu
            // if ((state.isTai && total (3-10)) || (state.isTai && total (11-18))) {
            //     state.soBanThang += 1
            // }

            //Tính thắng thua chẵn lẻ 
            if ((state.isTai && total % 2 != 0) || (!state.isTai && total % 2 != 0)) {
                state.soBanThang += 1
            }
            //Tính tổng số lần chơi
            state.soBanChoi += 1
            return { ...state, mangXucXac: newMangXucXac }
        }
        default: return { ...state }
    }
}