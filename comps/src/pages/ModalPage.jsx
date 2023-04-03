// @ts-nocheck
import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const hanldeClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accpet.</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={hanldeClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur, dui a rhoncus venenatis, enim
        purus lacinia felis, sed auctor elit augue quis libero. Vestibulum commodo non felis vitae tincidunt. Integer
        fermentum tristique erat eu porta. Cras volutpat volutpat maximus. Fusce tempor porttitor elementum. Nullam in
        dictum erat, in eleifend arcu. Donec quis dolor vitae justo imperdiet aliquet nec at felis. Quisque efficitur
        arcu eget congue ultrices. Nulla dapibus lectus ac consectetur pulvinar. Fusce ipsum leo, malesuada eget blandit
        suscipit, eleifend quis dolor. Morbi ac ligula feugiat sapien semper porta. Suspendisse potenti. Nulla consequat
        pharetra pharetra. Fusce facilisis at lacus et euismod. Phasellus varius massa eu diam bibendum, ut tempor velit
        ornare. Pellentesque et dignissim enim. Aenean ac mauris ut massa cursus venenatis. Pellentesque in nisl ac diam
        venenatis convallis in sit amet magna. Ut tempor metus ipsum, nec varius felis consectetur vitae. Curabitur
        commodo euismod diam. Aliquam iaculis luctus lacus id porta. Aliquam at rhoncus felis, imperdiet aliquet metus.
        Aenean finibus, tortor sit amet gravida lobortis, quam tellus pretium enim, facilisis porta erat turpis at nibh.
        Praesent feugiat neque eget leo consequat scelerisque. Sed sed tempus quam, vitae euismod mauris. Integer sit
        amet diam facilisis, sagittis sapien id, euismod felis. Pellentesque condimentum at eros id volutpat. Quisque
        vitae nisl nunc. Etiam feugiat at arcu non consequat. In a convallis nibh, ac tempus enim. Proin sapien eros,
        gravida sit amet viverra sit amet, tincidunt quis metus. Phasellus consequat ante laoreet eros vestibulum porta.
        Donec ex nisi, mollis non gravida at, malesuada at lectus. Donec ac rhoncus purus. Donec at magna accumsan,
        vulputate risus id, efficitur mi. Morbi non purus vel nisi rhoncus lobortis. Integer at aliquam justo, at dictum
        nisi. Pellentesque porttitor dolor non est luctus vulputate. Morbi neque turpis, sagittis mattis ullamcorper et,
        euismod sed sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Nulla in ipsum tempor, facilisis ligula vitae, vestibulum orci. Phasellus blandit blandit est, blandit elementum
        tellus gravida vel. Aliquam erat volutpat. Nam congue vulputate nibh, vitae dictum nisi ullamcorper et.
        Vestibulum eu erat est. Vestibulum at quam tortor. Curabitur ornare orci magna, a posuere sapien lacinia ac.
        Donec in lacinia libero. Fusce luctus auctor efficitur. Duis ut lacinia enim, a aliquam purus. Duis hendrerit
        dignissim justo nec volutpat. Suspendisse dignissim elit eget dui blandit tincidunt. Fusce a felis leo.
        Phasellus in dictum arcu, at consectetur leo. Nulla facilisi. Donec ut orci in est imperdiet fringilla et vitae
        massa. Praesent pulvinar est ipsum, eu efficitur neque congue sit amet. Sed dapibus est in ligula scelerisque,
        eget fermentum lorem rutrum. Nullam volutpat, sem ac scelerisque sagittis, est lectus pretium magna, in
        facilisis risus est vitae velit. Nullam quis ex id dolor scelerisque pharetra vel id odio. Duis bibendum
        bibendum sem, a tincidunt nisl pulvinar id. Donec finibus commodo orci ut tincidunt. Etiam venenatis nulla ut
        sapien dignissim, condimentum bibendum turpis posuere. Suspendisse fermentum ornare nisl, sed aliquet libero
        mattis ut. Donec eros urna, luctus a tincidunt id, suscipit eget mi. Curabitur ipsum justo, lacinia vitae
        finibus at, malesuada eget nunc. Ut aliquet sapien sed vestibulum efficitur. Donec blandit justo id metus porta
        sagittis. Aliquam molestie pellentesque orci, vel pretium ex facilisis a. Vestibulum luctus eget sem sed
        lacinia. Sed a nibh arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet
        bibendum dolor. Praesent tincidunt lacus ut aliquet rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Phasellus consectetur, dui a rhoncus venenatis, enim purus lacinia felis, sed auctor elit augue quis
        libero. Vestibulum commodo non felis vitae tincidunt. Integer fermentum tristique erat eu porta. Cras volutpat
        volutpat maximus. Fusce tempor porttitor elementum. Nullam in dictum erat, in eleifend arcu. Donec quis dolor
        vitae justo imperdiet aliquet nec at felis. Quisque efficitur arcu eget congue ultrices. Nulla dapibus lectus ac
        consectetur pulvinar. Fusce ipsum leo, malesuada eget blandit suscipit, eleifend quis dolor. Morbi ac ligula
        feugiat sapien semper porta. Suspendisse potenti. Nulla consequat pharetra pharetra. Fusce facilisis at lacus et
        euismod. Phasellus varius massa eu diam bibendum, ut tempor velit ornare. Pellentesque et dignissim enim. Aenean
        ac mauris ut massa cursus venenatis. Pellentesque in nisl ac diam venenatis convallis in sit amet magna. Ut
        tempor metus ipsum, nec varius felis consectetur vitae. Curabitur commodo euismod diam. Aliquam iaculis luctus
        lacus id porta. Aliquam at rhoncus felis, imperdiet aliquet metus. Aenean finibus, tortor sit amet gravida
        lobortis, quam tellus pretium enim, facilisis porta erat turpis at nibh. Praesent feugiat neque eget leo
        consequat scelerisque. Sed sed tempus quam, vitae euismod mauris. Integer sit amet diam facilisis, sagittis
        sapien id, euismod felis. Pellentesque condimentum at eros id volutpat. Quisque vitae nisl nunc. Etiam feugiat
        at arcu non consequat. In a convallis nibh, ac tempus enim. Proin sapien eros, gravida sit amet viverra sit
        amet, tincidunt quis metus. Phasellus consequat ante laoreet eros vestibulum porta. Donec ex nisi, mollis non
        gravida at, malesuada at lectus. Donec ac rhoncus purus. Donec at magna accumsan, vulputate risus id, efficitur
        mi. Morbi non purus vel nisi rhoncus lobortis. Integer at aliquam justo, at dictum nisi. Pellentesque porttitor
        dolor non est luctus vulputate. Morbi neque turpis, sagittis mattis ullamcorper et, euismod sed sem. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla in ipsum tempor,
        facilisis ligula vitae, vestibulum orci. Phasellus blandit blandit est, blandit elementum tellus gravida vel.
        Aliquam erat volutpat. Nam congue vulputate nibh, vitae dictum nisi ullamcorper et. Vestibulum eu erat est.
        Vestibulum at quam tortor. Curabitur ornare orci magna, a posuere sapien lacinia ac. Donec in lacinia libero.
        Fusce luctus auctor efficitur. Duis ut lacinia enim, a aliquam purus. Duis hendrerit dignissim justo nec
        volutpat. Suspendisse dignissim elit eget dui blandit tincidunt. Fusce a felis leo. Phasellus in dictum arcu, at
        consectetur leo. Nulla facilisi. Donec ut orci in est imperdiet fringilla et vitae massa. Praesent pulvinar est
        ipsum, eu efficitur neque congue sit amet. Sed dapibus est in ligula scelerisque, eget fermentum lorem rutrum.
        Nullam volutpat, sem ac scelerisque sagittis, est lectus pretium magna, in facilisis risus est vitae velit.
        Nullam quis ex id dolor scelerisque pharetra vel id odio. Duis bibendum bibendum sem, a tincidunt nisl pulvinar
        id. Donec finibus commodo orci ut tincidunt. Etiam venenatis nulla ut sapien dignissim, condimentum bibendum
        turpis posuere. Suspendisse fermentum ornare nisl, sed aliquet libero mattis ut. Donec eros urna, luctus a
        tincidunt id, suscipit eget mi. Curabitur ipsum justo, lacinia vitae finibus at, malesuada eget nunc. Ut aliquet
        sapien sed vestibulum efficitur. Donec blandit justo id metus porta sagittis. Aliquam molestie pellentesque
        orci, vel pretium ex facilisis a. Vestibulum luctus eget sem sed lacinia. Sed a nibh arcu. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Phasellus sit amet bibendum dolor. Praesent tincidunt lacus ut aliquet
        rutrum.
      </p>
    </div>
  );
}

export default ModalPage;
