import React from 'react'

export default function CradSlider() {
    return (
        <div>
            <div className="carousel w-85 h-85">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://t4.ftcdn.net/jpg/05/51/96/35/360_F_551963598_53hrJ2UXDoC00XhkqJ8lKN8Xa2EQg4no.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfQsRWaXG9PXbNDbd92K0GNGlN3bUZ4QffDGUVRhK86pGL9QGgjWvdMusNBQnKEYNRdc&usqp=CAU" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHw%3D&w=1000&q=80" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://media.istockphoto.com/id/866502512/photo/alarm-clock-friends-situation-with-hand.jpg?s=170667a&w=0&k=20&c=I87y4xBxUMoW_-nh_92N7bQmhCKkzIkVC7jwSQlcmGo=" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    )
}
