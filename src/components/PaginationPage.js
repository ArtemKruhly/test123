import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class PaginationPage extends React.Component {
    render() {
        return (
            <Pagination aria-label="Page navigation example">
                <PaginationItem className="page_item ">
                    <PaginationLink previous href="#" className="arrow_item"/>
                </PaginationItem>
                <PaginationItem className="page_item">
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page_item">
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page_item">
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page_item">
                    <PaginationLink href="#">
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page_item">
                    <PaginationLink href="#">
                        5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page_item">
                    <PaginationLink next href="#"  className="arrow_item"/>
                </PaginationItem>
                <div>
                    <img src={"/images/mess.PNG"} alt="messanger"/>
                </div>
            </Pagination>
        );
    }
}