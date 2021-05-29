import React from "react";
import SocialBlock from "../../Base/socialBlock";
import Mail from "../Mail";

function ContactMe() {
	return (
		<div className="uk-width-1-1">
			<div className="uk-text-center">
				<p>Find me on : </p>
				<SocialBlock />
			</div>
			<div className="mail-card uk-border-rounded uk-padding-small uk-margin-small">
				<Mail />
			</div>
		</div>
	);
}

export default ContactMe;
