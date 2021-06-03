import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initApplications } from "../utils/actions/appStateAction";
import Desktop from "../components/Desktop/Desktop";
import { useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import DesktopContextMenu from "../components/ContextMenu/desktop.contextMenu";
import { SCREENS } from "../utils/Documents/enums";

const MENU_ID = "context-menu";

function DesktopContainer() {
	const current_settings = useSelector((state) => state.settingsState);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initApplications());
	});

	const { show } = useContextMenu({
		id: MENU_ID,
	});
	function handleContextMenu(event) {
		event.preventDefault();
		show(event, {
			props: {
				key: "value",
			},
		});
	}

	return (
		<div
			className="uk-background-cover uk-background-muted screenHeight"
			style={{
				backgroundImage: `url(${current_settings.currentWallpaper})`,
			}}
			onContextMenu={handleContextMenu}
		>
			<Desktop />
			<DesktopContextMenu location={SCREENS.DESKTOP} />
		</div>
	);
}

export default DesktopContainer;
