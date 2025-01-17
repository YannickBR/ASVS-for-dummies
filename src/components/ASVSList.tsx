import ASVSItem from "../model/ASVSItem";
import React from "react";

type Props = {
    items: ASVSItem[]
}

const ASVSList: React.FC<Props> = ({ items }) => {
    const filteredItems = items.filter((i: ASVSItem) => i.show);

    return (
        <>
            <h2 className='mt-6'>List <small>{filteredItems.length.toString()}</small></h2>

            <table className='border-separate border-spacing-2'>
                <thead>
                    <tr className='text-left'>
                        <th>Chapter, Section & Id</th>
                        <th className='w-2/5'>Requirement</th>
                        <th className='w-[30%]'>Quick reference guide chapter</th>
                    </tr>
                </thead>
                <tbody className='align-text-top'>
                    {items.map((item: ASVSItem, index: number) => (
                        <tr key={`item-${index.toString()}`}
                                    className={`${item.show} ${!item.show ? "hidden" : ""}`}>
                            <td>
                                {item.chapter_id} {item.chapter_name} <br/>
                                {item.section_id} {item.section_name} <br/>
                                Level 1 {item.level1} <br/>
                                Level 2 {item.level2} <br/>
                                Level 3 {item.level3} 
                            </td>
                            <td> 
                                {item.req_id} &nbsp;
                                    {item.req_description}
                            </td>
                            <td>
                                {item.quick_reference}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ASVSList;
