import React from "react";
import Modal from "../../components/Modal/Modal";

const OrderModal = ({ handleOrder, close }) => {
	return (
		<Modal close={close}>
			<p className="is-size-4 has-text-weight-semibold mb-3">Your order had been placed!</p>
			<a
				href="https://paytm.com/"
				target="_blank"
				className="button is-link is-light is-outlined is-large is-fullwidth ">
				Confirm Order
			</a>
		</Modal>
	);
};

export default OrderModal;
