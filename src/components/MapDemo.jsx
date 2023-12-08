import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, Carousel, CarouselItem, Col, Collapse, Container, ListGroup, Pagination, Row } from 'react-bootstrap';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import JournalDemo from '../assets/documents/journalDemo';
import Bike from '../assets/_figures/bike.svg'

const MapDemo = () => {
    const [map, setMap] = useState([])
    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json", {
        })
            .then(res => { return res.json() })
            .then(data => {
                const newData = JSON.parse(JSON.stringify(data));  // Deep copy
                newData.objects.states.geometries = newData.objects.states.geometries.filter(
                    item => !["02", "72", "15", "60", "66", "78", "69"].includes(item.id));
                setMap(newData);
            })
    }, [])   
    const visitedStates = {"36":[650, 150, '5/22/2022-5/23/2022'], "34":[650, 190, '5/24/2022'], "42":[590, 190, '5/25/2022-5/31/2022'],
        "39":[530, 190, '6/01/2022-6/03/2022'], "18":[490, 190, '6/04/2022-6/07/2022'], "17":[450, 170, '6/08/2022-6/13/2022'], 
        "55":[440, 140, '6/14/2022-6/17/2022'], "27":[390, 120, '6/18/2022-6/21/2022'], "46":[300, 110, '6/22/2022-6/29/2022'], 
        "56":[200, 140, '6/31/2022-7/09/2022'], "30":[180, 90, '7/10/2022-7/15/2022'], "16":[110, 120, '7/16/2022-7/18/2022'], 
        "53":[50, 80, '7/19/2022-7/24/2022'], "41":[40, 150, '7/25/2022-7/29/2022'], "06":[20, 260, '7/30/2022-8/06/2022']}
    const [selectedState, setSelectedState] = useState(null)
    const [bikePosition, setBikePosition] = useState({ x: 690, y: -10 })
    const [open, setOpen] = useState(false);
    const handleStateClick = (id) => {
        if (selectedState === id) {
            setOpen(false)
            setSelectedState(null)
            setBikePosition({ x: 690, y: -10 })
        } else {
            setSelectedState(id)
            setBikePosition({ x: visitedStates[id][0], y: visitedStates[id][1] })
            setOpen(true)
        }
    }

    function formatJournalEntry(entry) {
        return (
            <div>
                <CardBody>
                    <h2 className='journalTitle' style={{textAlign: 'center'}}>"{entry.title}"</h2>
                    <p className='journalBody'>{entry.body}</p>
                </CardBody>
                <CardBody>
                <Carousel>
                {entry.image.map((imgsrc, index) => (
                    <Carousel.Item key={index}>
                    <img
                    className="d-block w-100"
                    src={imgsrc}
                    alt={`image of demo${index+1}`}
                    />
                    </Carousel.Item>
                ))}
                </Carousel>
                </CardBody>
            </div>
        )
    }    
    
    return (    
        <Container>
        <h1>Illini4000 2022 interactive ride map (work in progress)</h1>
        <p>This is a <strong>demo</strong> of an interactive map website I'm building for my friend to document his 
            <a href='https://www.illini4000.org/2022-route' target="_blank" rel="noopener noreferrer"> cycling journey </a>   
            across the US in the summer of 2022.
            <br/>
            The map is built with 
            <a href='https://www.react-simple-maps.io/' target="_blank" rel="noopener noreferrer"> React Simple Maps </a>
            using a modified 
            <a href='https://github.com/topojson/us-atlas#states' target="_blank" rel="noopener noreferrer"> U.S Atlas TopoJSON </a> 
            that leaves only the continental United States.
            Each state that was visited is a clickable button that allows users to view content specific to that state.
        </p>
        <Row style={{backgroundColor:'#89CFF3', paddingBottom:'15px', paddingTop:'15px'}}>
            <Col xs={12} md={6}>
            <Row style={{marginBottom:'15px'}}>
                <Card style={{ border:'none', backgroundColor: '#89CFF3',}} className='text-center journalTitle'>
                <h1 style={{marginTop:'10px'}}>
                    {selectedState ? map.objects.states.geometries.find(
                        geo => geo.id === selectedState).properties.name : 'click any visited state'}
                </h1>
                <h2>
                    {selectedState? visitedStates[selectedState][2] : `and read the journal entry!`}
                </h2>
                </Card>
            </Row>
            <hr/>
            <Row style={{marginBottom:'15px'}}>
                <Card style={{overflow:'hidden', backgroundColor: '#89CFF3', border:'none'}}>
                <ComposableMap
                projection='geoMercator'
                projectionConfig={{
                    scale: 750,
                    center: [-96, 39],
                }}
                style={{backgroundColor:'#89CFF3'}}
                fill='white'
                stroke='black'
                strokeWidth={1}
                >
                    <Geographies geography={map}>
                        {(geographies) => {
                        return geographies.geographies.map((geo) => {
                            const isVisited = Object.keys(visitedStates).includes(geo.id)
                            const isSelected = (geo.id === selectedState);

                            return <Geography 
                                key={geo.rsmKey} 
                                geography={geo} 
                                style={{
                                    hover:{outline: 'none', fill: isVisited? '#feb300' : 'white'},
                                    default:{outline: 'none', fill: isSelected ? '#feb300' : (isVisited ? '#ff5e6c' : 'white'), 
                                    pointerEvents: isVisited ? 'all' : 'none'},
                                    pressed: {outline: 'none', fill: '#feb300'},
                                }}
                                onClick={() => handleStateClick(geo.id)}
                                />
                        });
                        }}
                    </Geographies>
                    <image 
                        href={Bike}
                        x={bikePosition.x} 
                        y={bikePosition.y}
                        height="100"
                        width="100"
                    />
                </ComposableMap>
                </Card>
            </Row>
            </Col>
            <Col xs={12} md={6}>
            <Collapse in={open}>
                <Card style={{height: '100%', backgroundColor: '#CDF5FD', border:'none'}}>
                    {selectedState && formatJournalEntry(JournalDemo[selectedState])}
                </Card>
            </Collapse>
            </Col>
        </Row>
        </Container>
    )
}

export default MapDemo;