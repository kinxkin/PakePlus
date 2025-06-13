console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)

// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

document.addEventListener('click', hookClick, { capture: true })

// css filter
document.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.body
    // 配置观察选项
    const config = {
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const element0 = document.querySelector('#HMimageleft');
                if (element0) {
                    element0.style.display = 'none';
                };const element1 = document.querySelector('#HMimageright');
                if (element1) {
                    element1.style.display = 'none';
                };const element2 = document.querySelector('#mp4richtourl');
                if (element2) {
                    element2.style.display = 'none';
                };const element3 = document.querySelector('#hbidboxl');
                if (element3) {
                    element3.style.display = 'none';
                };const element4 = document.querySelector('#HMrichA');
                if (element4) {
                    element4.style.display = 'none';
                };const element5 = document.querySelector('#RreBJC > img:nth-child(2)');
                if (element5) {
                    element5.style.display = 'none';
                };const element6 = document.querySelector('#hbidbox');
                if (element6) {
                    element6.style.display = 'none';
                };const element7 = document.querySelector('#RreBJC > img:nth-child(5)');
                if (element7) {
                    element7.style.display = 'none';
                };const element8 = document.querySelector('#RreBJC > img:nth-child(2)');
                if (element8) {
                    element8.style.display = 'none';
                };const element9 = document.querySelector('#HMCloseImageright1');
                if (element9) {
                    element9.style.display = 'none';
                };const element10 = document.querySelector('#HMCloseImageright');
                if (element10) {
                    element10.style.display = 'none';
                };const element11 = document.querySelector('#HMcoupletIconright');
                if (element11) {
                    element11.style.display = 'none';
                };const element12 = document.querySelector('#cbMmpy');
                if (element12) {
                    element12.style.display = 'none';
                };const element13 = document.querySelector('#HMrichA');
                if (element13) {
                    element13.style.display = 'none';
                };const element14 = document.querySelector('#cbMmpy > img:nth-child(2)');
                if (element14) {
                    element14.style.display = 'none';
                };const element15 = document.querySelector('#cbMmpy > img:nth-child(2)');
                if (element15) {
                    element15.style.display = 'none';
                };const element16 = document.querySelector('#cbMmpy > img:nth-child(5)');
                if (element16) {
                    element16.style.display = 'none';
                };const element17 = document.querySelector('#cbMmpy');
                if (element17) {
                    element17.style.display = 'none';
                };const element18 = document.querySelector('#cbMmpy');
                if (element18) {
                    element18.style.display = 'none';
                }
            }
        }
    })
    observer.observe(targetNode, config)
})
// end css filter
