"use client";
import React from "react";
// import SeatPicker from "react-seat-picker";

export default function Page({ params }: { params: any }) {
  // const seatmapRef: any = React.createRef();

  // let blocks: any = [
  //   {
  //     id: "block",
  //     title: "Block",
  //     labels: [],
  //     color: "#01a5ff",
  //     seats: [
  //       {
  //         id: "s-0",
  //         x: 33,
  //         y: 30,
  //         color: "#01a5ff",
  //         salable: true,
  //         custom_data: {
  //           any: "things"
  //         },
  //         note: "note test",
  //         tags: {},
  //         title: "Title"
  //       }
  //     ]
  //   }
  // ];
  // const config = {
  //   legend: true,
  //   style: {
  //     seat: {
  //       hover: "#8fe100",
  //       color: "#f0f7fa",
  //       selected: "#8fe100",
  //       check_icon_color: "#fff",
  //       not_salable: "#0088d3",
  //       focus: "#8fe100"
  //     },
  //     legend: {
  //       font_color: "#3b3b3b",
  //       show: false
  //     },
  //     block: {
  //       title_color: "#fff"
  //     }
  //   }
  // };
  // const seatClick = (seat: any) => {
  //   // console.log(seat);
  //   if (!seat.isSelected() && seat.item.salable === true) {
  //     seat.select();
  //   } else {
  //     seat.unSelect();
  //   }
  // };

  return (
    <>
      <div className="flex flex-row h-full">
        {/* <Seatmap
          className="w-full flex-1 h-full"
          ref={seatmapRef}
          seatClick={seatClick}
          blocks={blocks}
          config={config}
        ></Seatmap> */}
      </div>
    </>
  );
}
