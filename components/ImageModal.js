import React from 'react'
import { Image, Modal } from 'semantic-ui-react'

const ImageModal = (props) => (
  <Modal basic trigger={props.children}>
    <Modal.Content image>
      <Image {...props.image} />
    </Modal.Content>
  </Modal>
)

export default ImageModal
