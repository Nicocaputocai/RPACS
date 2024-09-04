import { Container, Row } from "react-bootstrap"
import Collectionitem from "./CollectionItems"
import Img1 from "../assets/image/img-item-1.jpg"

export const Collections = () => {
  return (
    <Container className="py-5">
        <h3 className="font-secondary color-primary fs-40">
            <u>Plan de Acción</u> <i class="bi bi-arrow-right"></i>
        </h3>
        <Row>
          <h4 style={{textAlign:"center"}}>Etapa I</h4>
            <Collectionitem img={Img1} text="Etapa I" />
            <Collectionitem img={Img1} text="Etapa II" />
            <Collectionitem img={Img1} text="Etapa III" />
        </Row>
    </Container>
  )
}
