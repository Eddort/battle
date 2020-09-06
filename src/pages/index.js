import React from "react";
import theme from "theme";
import { Theme, Image, Icon, Text, Button, Box, Input, Hr } from "@quarkly/widgets";
import { Override, StackItem, Menu, Stack, Section, SocialMedia } from "@quarkly/components";
import { MdMenu, MdArrowForward, MdRemoveRedEye } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<Section background="url(https://ukit.top/quarkly/2/image-3-.png) 100% 100% no-repeat,linear-gradient(0deg, #000000, #000000)" padding="46px 0 0px 0" lg-background="url(https://ukit.top/quarkly/2/Speaker.png) 50% -100%/700px no-repeat,linear-gradient(0deg, #000000, #000000)" sm-background="url(https://ukit.top/quarkly/2/Speaker.png) 50% -50%/700px no-repeat,linear-gradient(0deg, #000000, #000000)">
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Image width="118px" src="https://ukit.top/quarkly/2/Landing.png" height="39px" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					{"        "}
					<Icon
						category="md"
						icon={MdMenu}
						lg-color="#ffffff"
						lg-font="40px sans-serif"
						display="none"
						lg-display="block"
					/>
					<Menu display="flex" lg-display="none">
						<Override slot="item-index" display="none" />
						<Override slot="item-404" display="none" />
						<Override
							slot="link"
							font="bold 12px/15px --fontFamily-googleMontserrat"
							letter-spacing="2.4px"
							text-decoration-line="initial"
							color="#ffffff"
							padding="0px 0px 0px 0px"
						/>
						<Override slot="item" padding="6px 33px 6px 31px" />
					</Menu>
					{"    "}
				</StackItem>
			</Stack>
			<Stack
				margin="135px 0px 202px 0px"
				width="90%"
				gap="--cmp-stack-gap-small"
				lg-width="100%"
				lg-margin="85px 0px 136px 0px"
			>
				{"    "}
				<StackItem width="100%" display="flex" padding="0px 0px 0px 0px">
					<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 88px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
						lg-margin="0px 0px 36px 0px"
						sm-font="normal bold 37px/44px Arvo, serif"
					>
						Universal Music{" "}
						<br />
						Group and Brands{"\n\n"}
					</Text>
					<Button
						background="#F05638;"
						font="--button"
						letter-spacing="2.4px"
						height="43px"
						width="172px"
						border-radius="50px"
						color="#ffffff"
					>
						LEARN MORE{"\n\n"}
					</Button>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="120px 0 120px 0">
			<Override slot="SectionContent" max-width="1200px" lg-width="100%" sm-width="90%" />
			<Stack margin="0px 0px 0px 0px" gap="--cmp-stack-gap-small" sm-width="100%">
				{"    "}
				<StackItem width="100%" display="flex" padding="0px 0px 0px 0px">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						font="--button"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--grey"
						letter-spacing="2.4px"
					>
						AWESOME FEATURE{"\n\n"}
					</Text>
					<Text
						font="--headline2"
						margin="18px 0px 60px 0px"
						display="inline-block"
						color="--dark"
						letter-spacing="2.4px"
						sm-text-align="center"
						sm-font="normal 500 30px/48px Arvo, serif"
						sm-width="60%"
						sm-margin="18px 0px 30px 0px"
					>
						Beautiful and Fully Isolated{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" gap="--cmp-stack-gap-small" width="100%" lg-width="100%">
				{"    "}
				<StackItem width="33%" display="flex" padding="0px 0px 0px 0px" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="0px 0px 72px 0px"
					/>
					{"        "}
					<Image width="229px" height="165px" src="https://ukit.top/quarkly/2/Paper_Hand-1-.png" object-position="-50% 0%" />
					<Text font="--button" margin="12px 0px 17px 0px" display="inline-block" letter-spacing="2.4px">
						A4 PAPER{"\n\n"}
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--grey"
						text-align="center"
					>
						Computer manufacturer{" "}
						<br />
						Lenovo is in hot water this{" "}
						<br />
						week after pre-installing{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="33%"
					display="flex"
					padding="0px 0px 0px 0px"
					sm-width="100%"
					sm-margin="0px 0px 30px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						box-shadow="0px 15px 50px rgba(0, 0, 0, 0.1);"
						border-radius="15px"
						padding="54px 47px 0px 47px"
						lg-padding="54px 30px 0px 30px"
						sm-margin="0px 0px 0px 0px"
						overflow-y="hidden"
						overflow-x="hidden"
					/>
					{"        "}
					<Box />
					<Image width="198px" height="148px" src="https://ukit.top/quarkly/2/Eyedropper.png" object-position="-50% 0%" />
					<Text font="--button" margin="12px 0px 17px 0px" display="inline-block" letter-spacing="2.4px">
						EYEDROPER{"\n\n"}
					</Text>
					<Text
						font="--base"
						margin="0px 0px 28px 0px"
						display="inline-block"
						color="--grey"
						text-align="center"
					>
						It seems like hundreds of{" "}
						<br />
						new iPhone apps pop up{" "}
						<br />
						every week, but which{"  \n\n\n\n"}
					</Text>
					<Icon
						category="md"
						icon={MdArrowForward}
						border-width="3px"
						border-color="#FFC80A"
						border-style="solid"
						border-radius="100%"
						padding="5px 5px 5px 5px"
						color="#8F75BE"
						margin="0px 0px 60px 0px"
					/>
					{"    "}
				</StackItem>
				<StackItem width="33%" display="flex" padding="0px 0px 0px 0px" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="0px 0px 72px 0px"
					/>
					{"        "}
					<Image width="229px" height="165px" src="https://ukit.top/quarkly/2/Crown.png" object-position="-50% 0%" />
					<Text font="--button" margin="12px 0px 17px 0px" display="inline-block" letter-spacing="2.4px">
						CROWN{"\n\n"}
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--grey"
						text-align="center"
					>
						Watching a movie on your{" "}
						<br />
						smartphone can be pretty{" "}
						<br />
						great, but who has the arm{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 88px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="100%" display="flex" padding="0px 0px 0px 0px">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="--dark"
						letter-spacing="2.4px"
						sm-font="normal 500 30px/48px Arvo, serif"
					>
						News feed{"\n\n"}
					</Text>
					<Text
						font="--base"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="--grey"
						text-align="center"
					>
						Watching a movie on your smartphone can be pretty{" "}
						<br />
						great, but who has the arm{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" gap="--cmp-stack-gap-small" width="100%">
				{"    "}
				<StackItem
					width="33.3%"
					display="flex"
					padding="0px 0px 0px 0px"
					lg-width="50%"
					sm-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						background="#F7F8F9"
						border-radius="8px"
					/>
					{"        "}
					<Box
						width="100%"
						background="#FDDD37"
						height="240px"
						padding="0px 0px 0px 0px"
						border-radius="8px 8px 0px 0px"
					>
						<Image
							width="229px"
							height="165px"
							src="https://ukit.top/quarkly/2/Fill.png"
							object-position="-50% 0%"
							margin="51px 0px 0px 31px"
						/>
					</Box>
					<Text
						font="--headline3"
						margin="19px 0px 0px 25px"
						display="inline-block"
						letter-spacing="2.4px"
						color="--dark"
					>
						The number of protons{"\n\n"}
					</Text>
					<Text font="normal 500 14px/26px --fontFamily-googleOpenSans" margin="6px 0px 113px 25px" display="inline-block" color="--grey">
						Apple Inc has decided to launch the
						<br />
						much awaited Apple Watch in the{" \n\n\n\n"}
					</Text>
					<Box
						display="flex"
						width="100%"
						position="relative"
						bottom="1px"
						padding="0px 0px 0px 0px"
						margin="0px 0px 25px 0px"
					>
						<Box width="50%" display="flex" align-items="center">
							<Icon
								category="io"
								icon={IoMdTime}
								color="#DADADA"
								font="700 16px sans-serif"
								padding="0px 0px 0px 25px"
							/>
							<Text font="bold 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 10px" display="inline-block" color="--grey">
								1 JUNE 2015{"\n\n \n\n\n\n"}
							</Text>
						</Box>
						<Box width="50%" display="flex" align-items="center" justify-content="flex-end">
							<Icon category="md" icon={MdRemoveRedEye} color="#DADADA" font="17px sans-serif" />
							<Text font="bold 10px/12px --fontFamily-googleMontserrat" margin="0px 25px 0px 10px" display="inline-block" color="--grey">
								343{"\n\n"}
							</Text>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.3%"
					display="flex"
					padding="0px 0px 0px 0px"
					lg-width="50%"
					sm-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						background="#F7F8F9"
						border-radius="8px"
					/>
					{"        "}
					<Box width="100%" height="240px" background="#FF6941" padding="0px 0px 0px 0px">
						<Image
							width="100%"
							src="https://ukit.top/quarkly/2/Mask.png"
							object-position="-50% 0%"
							margin="0px 0px 0px 0px"
							height="240px"
							border-radius="8px 8px 0px 0px"
						/>
					</Box>
					<Text
						font="--headline3"
						margin="19px 0px 0px 25px"
						display="inline-block"
						letter-spacing="2.4px"
						color="--dark"
					>
						Sport Stadium Birdview{" \n\n"}
					</Text>
					<Text font="normal 500 14px/26px --fontFamily-googleOpenSans" margin="6px 0px 113px 25px" display="inline-block" color="--grey">
						Apple Inc has decided to launch the
						<br />
						much awaited Apple Watch in the{" \n\n\n\n"}
					</Text>
					<Box
						display="flex"
						width="100%"
						position="relative"
						bottom="1px"
						padding="0px 0px 0px 0px"
						margin="0px 0px 25px 0px"
					>
						<Box width="50%" display="flex" align-items="center">
							<Icon
								category="io"
								icon={IoMdTime}
								color="#DADADA"
								font="700 16px sans-serif"
								padding="0px 0px 0px 25px"
							/>
							<Text font="bold 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 10px" display="inline-block" color="--grey">
								1 JUNE 2015{"\n\n \n\n\n\n"}
							</Text>
						</Box>
						<Box width="50%" display="flex" align-items="center" justify-content="flex-end">
							<Icon category="md" icon={MdRemoveRedEye} color="#DADADA" font="17px sans-serif" />
							<Text font="bold 10px/12px --fontFamily-googleMontserrat" margin="0px 25px 0px 10px" display="inline-block" color="--grey">
								343{"\n\n"}
							</Text>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.3%"
					display="flex"
					padding="0px 0px 0px 0px"
					lg-width="50%"
					sm-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						background="#292929"
						border-radius="8px"
					/>
					{"        "}
					<Box
						width="100%"
						height="240px"
						background="#B6E0FF"
						padding="0px 0px 0px 0px"
						border-radius="8px 8px 0px 0px"
					>
						<Image width="229px" height="192px" src="https://ukit.top/quarkly/2/Neon_Like.png" margin="27px 0px 0px 49px" />
					</Box>
					<Text
						font="--headline3"
						margin="19px 0px 0px 25px"
						display="inline-block"
						letter-spacing="2.4px"
						color="#E5E5E5"
					>
						The number of protons{"\n\n"}
					</Text>
					<Text font="normal 500 14px/26px --fontFamily-googleOpenSans" margin="6px 0px 87px 25px" display="inline-block" color="--grey">
						Startup founders often have a more casual{" "}
						<br />
						or offbeat attitude in their dress, office{" "}
						<br />
						space and marketing, as compared to{" \n\n \n\n\n\n"}
					</Text>
					<Box
						display="flex"
						width="100%"
						position="relative"
						bottom="1px"
						padding="0px 0px 0px 0px"
						margin="0px 0px 25px 0px"
					>
						<Box width="50%" display="flex" align-items="center">
							<Icon
								category="io"
								icon={IoMdTime}
								color="#DADADA"
								font="700 16px sans-serif"
								padding="0px 0px 0px 25px"
							/>
							<Text font="bold 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 10px" display="inline-block" color="--grey">
								1 JUNE 2015{"\n\n \n\n\n\n"}
							</Text>
						</Box>
						<Box width="50%" display="flex" align-items="center" justify-content="flex-end">
							<Icon category="md" icon={MdRemoveRedEye} color="#DADADA" font="17px sans-serif" />
							<Text font="bold 10px/12px --fontFamily-googleMontserrat" margin="0px 25px 0px 10px" display="inline-block" color="--grey">
								343{"\n\n"}
							</Text>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.3%"
					display="flex"
					padding="0px 0px 0px 0px"
					margin="5px 0px 0px 0px"
					lg-width="50%"
					sm-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						background="#F7F8F9"
						border-radius="8px"
					/>
					{"        "}
					<Box
						width="100%"
						height="240px"
						background="#FDEBD5"
						padding="0px 0px 0px 0px"
						border-radius="8px 8px 0px 0px"
					>
						<Image width="278px" height="162px" src="https://ukit.top/quarkly/2/Cloud.png" margin="50px 0px 0px 36px" />
					</Box>
					<Text
						font="--headline3"
						margin="19px 0px 0px 25px"
						display="inline-block"
						letter-spacing="2.4px"
						color="--dark"
					>
						The number of protons{"\n\n"}
					</Text>
					<Text
						font="normal 500 14px/26px --fontFamily-googleOpenSans"
						margin="6px 0px 113px 25px"
						display="inline-block"
						color="--grey"
						lg-margin="6px 0px 107px 25px"
					>
						Apple Inc has decided to launch the
						<br />
						much awaited Apple Watch in the{" \n\n\n\n"}
					</Text>
					<Box
						display="flex"
						width="100%"
						position="relative"
						bottom="1px"
						padding="0px 0px 0px 0px"
						margin="0px 0px 25px 0px"
					>
						<Box width="50%" display="flex" align-items="center">
							<Icon
								category="io"
								icon={IoMdTime}
								color="#DADADA"
								font="700 16px sans-serif"
								padding="0px 0px 0px 25px"
							/>
							<Text font="bold 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 10px" display="inline-block" color="--grey">
								1 JUNE 2015{"\n\n \n\n\n\n"}
							</Text>
						</Box>
						<Box width="50%" display="flex" align-items="center" justify-content="flex-end">
							<Icon category="md" icon={MdRemoveRedEye} color="#DADADA" font="17px sans-serif" />
							<Text font="bold 10px/12px --fontFamily-googleMontserrat" margin="0px 25px 0px 10px" display="inline-block" color="--grey">
								343{"\n\n"}
							</Text>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="66.7%"
					display="flex"
					padding="0px 0px 0px 0px"
					margin="5px 0px 0px 0px"
					lg-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						background="#F7F8F9"
						border-radius="8px"
						sm-padding="0px 14px 0px 0px"
					/>
					{"        "}
					<Box
						width="100%"
						height="240px"
						background="#FFE1D4"
						padding="0px 0px 0px 0px"
						border-radius="8px 8px 0px 0px"
						sm-padding="0px 10px 0px 0px"
					>
						<Image
							width="477px"
							height="177px"
							src="https://ukit.top/quarkly/2/Revolver.png"
							margin="42px 0px 0px 109px"
							sm-margin="42px 0px 0px 0px"
							sm-width="100%"
						/>
					</Box>
					<Text
						font="--headline3"
						margin="19px 0px 0px 25px"
						display="inline-block"
						letter-spacing="2.4px"
						color="--dark"
					>
						Sport Stadium Birdview{"\n\n"}
					</Text>
					<Text font="normal 500 14px/26px --fontFamily-googleOpenSans" margin="6px 0px 113px 25px" display="inline-block" color="--grey">
						Apple Inc has decided to launch the much awaited Apple Watch in the{" "}
						<br />
						upcoming month of April and has already received around five to six million{" \n\n"}
					</Text>
					<Box
						display="flex"
						width="100%"
						position="relative"
						bottom="1px"
						padding="0px 0px 0px 0px"
						margin="0px 0px 25px 0px"
					>
						<Box width="50%" display="flex" align-items="center">
							<Icon
								category="io"
								icon={IoMdTime}
								color="#DADADA"
								font="700 16px sans-serif"
								padding="0px 0px 0px 25px"
							/>
							<Text font="bold 10px/12px --fontFamily-googleMontserrat" margin="0px 0px 0px 10px" display="inline-block" color="--grey">
								1 JUNE 2015{"\n\n \n\n\n\n"}
							</Text>
						</Box>
						<Box width="50%" display="flex" align-items="center" justify-content="flex-end">
							<Icon category="md" icon={MdRemoveRedEye} color="#DADADA" font="17px sans-serif" />
							<Text font="bold 10px/12px --fontFamily-googleMontserrat" margin="0px 25px 0px 10px" display="inline-block" color="--grey">
								343{"\n\n"}
							</Text>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="70px 0 109px 0" background="rgba(0, 0, 0, 0) url(https://ukit.top/quarkly/2/Img.png) 0% 0% /cover no-repeat scroll padding-box" sm-background="#E1E9EB">
			<Override slot="SectionContent" max-width="1200px" lg-width="95%" />
			<Stack margin="0px 0px 0px 0px" gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="100%" display="flex" padding="0px 0px 0px 0px">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="--dark"
						letter-spacing="2.4px"
						sm-font="normal 500 30px/48px Arvo, serif"
					>
						Choose Pricing Plan{"\n\n"}
					</Text>
					<Text
						font="--base"
						margin="0px 0px 52px 0px"
						display="inline-block"
						color="--grey"
						text-align="center"
					>
						This new-found knowledge may then be used by{" "}
						<br />
						engineers to create new tools and machines,{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack
				margin="0px 0px 0px 0px"
				gap="--cmp-stack-gap-small"
				width="100%"
				display="flex"
				align-items="center"
				lg-width="100%"
				lg-justify-content="center"
			>
				{"    "}
				<StackItem
					width="33.3%"
					display="flex"
					padding="0px 0px 0px 0px"
					margin="0px -16px 0px 0px"
					sm-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="69px 0px 58px 0px"
						background="#F8F8F8"
						border-radius="6px 0px 0px 6px"
					/>
					{"        "}
					<Text
						font="--button"
						margin="0px 0px 3px 0px"
						display="inline-block"
						letter-spacing="2.4px"
						color="--dark"
					>
						BASIC PLAN{"\n\n"}
					</Text>
					<Box display="flex" align-items="flex-end" margin="0px 0px 14px 0px">
						<Text
							font="500 38px/48px --fontFamily-googleArvo"
							margin="0px 0px 35px 0px"
							display="inline-block"
							letter-spacing="2.4px"
							color="--dark"
						>
							${"\n\n"}
						</Text>
						<Text
							font="500 74px/91px --fontFamily-googleArvo"
							margin="0px 0px 0px 0px"
							display="inline-block"
							letter-spacing="2.4px"
							color="--dark"
						>
							29{"\n\n"}
						</Text>
						<Text font="300 20px/25px --fontFamily-googleArvo" margin="0px 0px 13px 0px" display="inline-block" color="#9FA3A7">
							/mo{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 8px 0px">
						<Text
							font="bold 14px/17px --fontFamily-googleMontserrat"
							margin="0px 6px 0px 0px"
							display="inline-block"
							letter-spacing="2.4px"
							color="--dark"
						>
							5{"\n\n"}
						</Text>
						<Text font="500 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#9FA3A7">
							Projects{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 8px 0px">
						<Text
							font="bold 14px/17px --fontFamily-googleMontserrat"
							margin="0px 6px 0px 0px"
							display="inline-block"
							letter-spacing="2.4px"
							color="--dark"
						>
							20{"\n\n"}
						</Text>
						<Text font="500 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#9FA3A7">
							Images{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 29px 0px">
						<Text
							font="bold 14px/17px --fontFamily-googleMontserrat"
							margin="0px 6px 0px 0px"
							display="inline-block"
							letter-spacing="2.4px"
							color="--dark"
						>
							9/5{"\n\n"}
						</Text>
						<Text font="500 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#9FA3A7">
							Support{"\n\n"}
						</Text>
					</Box>
					<Button
						font="--button"
						letter-spacing="2.4px"
						height="43px"
						width="172px"
						border-radius="50px"
						background="rgba(0, 119, 204, 0)"
						border-width="1px"
						border-color="#9FA3A7"
						border-style="solid"
						color="#525252"
					>
						BUY NOW{"\n\n\n\n"}
					</Button>
					{"    "}
				</StackItem>
				<StackItem width="33.3%" display="flex" padding="0px 0px 0px 0px" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="69px 0px 58px 0px"
						background="#ffffff"
						border-radius="6px"
						position="relative"
						height="455px"
					/>
					{"        "}
					<Text
						background="#FFC80A"
						color="#ffffff"
						font="500 8px/10px --fontFamily-googleMontserrat"
						padding="4px 7px 4px 7px"
						letter-spacing="1.92px"
						border-radius="4px"
						position="absolute"
						bottom="auto"
						height="8px"
						top="0px"
						right="30px"
						left="auto"
					>
						POPULAR{"\n\n"}
					</Text>
					<Text
						font="--button"
						margin="0px 0px 3px 0px"
						display="inline-block"
						letter-spacing="2.4px"
						color="--dark"
					>
						TEAM PLAN{"\n\n"}
					</Text>
					<Box display="flex" align-items="flex-end" margin="0px 0px 14px 0px">
						<Text
							font="500 38px/48px --fontFamily-googleArvo"
							margin="0px 0px 35px 0px"
							display="inline-block"
							letter-spacing="2.4px"
							color="--dark"
						>
							${"\n\n"}
						</Text>
						<Text
							font="500 74px/91px --fontFamily-googleArvo"
							margin="0px 0px 0px 0px"
							display="inline-block"
							letter-spacing="2.4px"
							color="--dark"
						>
							59{"\n\n"}
						</Text>
						<Text font="300 20px/25px --fontFamily-googleArvo" margin="0px 0px 13px 0px" display="inline-block" color="#9FA3A7">
							/mo{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 8px 0px">
						<Text
							font="bold 14px/17px --fontFamily-googleMontserrat"
							margin="0px 6px 0px 0px"
							display="inline-block"
							letter-spacing="2.4px"
							color="--dark"
						>
							10{"\n\n"}
						</Text>
						<Text font="500 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#9FA3A7">
							Projects{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 8px 0px">
						<Text
							font="bold 14px/17px --fontFamily-googleMontserrat"
							margin="0px 6px 0px 0px"
							display="inline-block"
							letter-spacing="2.4px"
							color="--dark"
						>
							40{"\n\n"}
						</Text>
						<Text font="500 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#9FA3A7">
							Images{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 29px 0px">
						<Text
							font="bold 14px/17px --fontFamily-googleMontserrat"
							margin="0px 6px 0px 0px"
							display="inline-block"
							letter-spacing="2.4px"
							color="--dark"
						>
							12/7{"\n\n"}
						</Text>
						<Text font="500 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#9FA3A7">
							Support{"\n\n"}
						</Text>
					</Box>
					<Button
						background="#F05638;"
						font="--button"
						letter-spacing="2.4px"
						height="43px"
						width="172px"
						border-radius="50px"
						color="#ffffff"
					>
						BUY NOW{"\n\n"}
					</Button>
					{"    "}
				</StackItem>
				<StackItem
					width="33.3%"
					display="flex"
					padding="0px 0px 0px 0px"
					margin="0px 0px 0px -16px"
					sm-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="69px 0px 58px 0px"
						background="#F8F8F8"
						border-radius="0px 6px 6px 0px"
					/>
					{"        "}
					<Text
						font="--button"
						margin="0px 0px 3px 0px"
						display="inline-block"
						letter-spacing="2.4px"
						color="--dark"
					>
						CORPORATE PLAN{"\n\n"}
					</Text>
					<Box display="flex" align-items="flex-end" margin="0px 0px 14px 0px">
						<Text
							font="500 38px/48px --fontFamily-googleArvo"
							margin="0px 0px 35px 0px"
							display="inline-block"
							letter-spacing="2.4px"
							color="--dark"
						>
							${"\n\n"}
						</Text>
						<Text
							font="500 74px/91px --fontFamily-googleArvo"
							margin="0px 0px 0px 0px"
							display="inline-block"
							letter-spacing="2.4px"
							color="--dark"
						>
							199{"\n\n"}
						</Text>
						<Text font="300 20px/25px --fontFamily-googleArvo" margin="0px 0px 13px 0px" display="inline-block" color="#9FA3A7">
							/mo{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 8px 0px">
						<Text font="bold 14px/17px --fontFamily-googleMontserrat" margin="0px 6px 0px 0px" display="inline-block" color="--dark">
							Unlimited{"\n\n\n\n"}
						</Text>
						<Text font="500 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#9FA3A7">
							Projects{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 8px 0px">
						<Text font="bold 14px/17px --fontFamily-googleMontserrat" margin="0px 6px 0px 0px" display="inline-block" color="--dark">
							Unlimited{"\n\n"}
						</Text>
						<Text font="500 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#9FA3A7">
							Images{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 29px 0px">
						<Text
							font="bold 14px/17px --fontFamily-googleMontserrat"
							margin="0px 6px 0px 0px"
							display="inline-block"
							letter-spacing="2.4px"
							color="--dark"
						>
							24/7{"\n\n"}
						</Text>
						<Text font="500 13px/16px --fontFamily-googleMontserrat" margin="0px 0px 0px 0px" display="inline-block" color="#9FA3A7">
							Support{"\n\n"}
						</Text>
					</Box>
					<Button
						font="--button"
						letter-spacing="2.4px"
						height="43px"
						width="172px"
						border-radius="50px"
						background="rgba(0, 119, 204, 0)"
						border-width="1px"
						border-style="solid"
						border-color="#9FA3A7"
						color="#525252"
					>
						BUY NOW{"\n\n\n\n"}
					</Button>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="116px 0 116px 0" background="rgba(0, 0, 0, 0) url(https://ukit.top/quarkly/2/Img-1-.png) 0% 0% /cover no-repeat scroll padding-box">
			<Override slot="SectionContent" max-width="1200px" />
			<StackItem width="100%" display="flex" padding="0px 0px 0px 0px">
				<Override
					slot="StackItemContent"
					align-items="center"
					flex-direction="row"
					background="#FFFFFF"
					border-radius="8px"
					justify-content="center"
					sm-flex-direction="column"
					sm-padding="0px 0px 35px 0px"
				/>
				{"        "}
				<Text
					font="--headline2"
					margin="66px 0px 66px 0px"
					display="inline-block"
					color="--dark"
					letter-spacing="2.4px"
					lg-font="normal 500 24px/31px Arvo, serif"
					sm-margin="35px 0px 24px 0px"
				>
					Ready to get started?{"\n\n"}
				</Text>
				<Button
					font="--button"
					letter-spacing="2.4px"
					height="43px"
					width="172px"
					border-radius="50px"
					background="rgba(0, 119, 204, 0)"
					border-width="2px"
					border-style="solid"
					border-color="#EDEDED"
					color="#212121"
					margin="0px 0px 0px 28px"
					sm-margin="0px 0px 11px 0px"
				>
					READ FAQ{"\n\n"}
				</Button>
				<Button
					background="#F05638;"
					font="--button"
					letter-spacing="2.4px"
					height="43px"
					width="172px"
					border-radius="50px"
					color="#ffffff"
					margin="0px 0px 0px 14px"
					sm-margin="0px 0px 0px 0px"
				>
					REQUEST{"\n\n\n\n"}
				</Button>
				{"    "}
			</StackItem>
		</Section>
		<Section padding="88px 0 122px 0" background="#ffffff">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack lg-align-items="center" lg-justify-content="center">
				{"    "}
				<StackItem width="55%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					{"        "}
					<Image width="375px" src="https://ukit.top/quarkly/2/Megaphone-1-.png" />
					<Box
						display="flex"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						width="100%"
						margin="-78px 0px 0px 0px"
					>
						<Text
							font="--headline2"
							margin="0px 0px 27px 0px"
							display="inline-block"
							color="--dark"
							letter-spacing="2.4px"
							sm-font="normal 500 30px/48px Arvo, serif"
						>
							Contact us{"\n\n"}
						</Text>
						<Text font="normal 500 14px/26px --fontFamily-googleOpenSans" margin="6px 0px 0px 25px" display="inline-block" color="--grey">
							This new-found knowledge may then be used by{" "}
							<br />
							engineers to create new tools and machines,{"\n\n \n\n\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="45%" display="flex" lg-width="60%" sm-width="90%">
					<Override
						slot="StackItemContent"
						box-shadow="0px 15px 50px rgba(0, 0, 0, 0.1)"
						border-radius="15px"
						flex-direction="column"
						align-items="center"
						padding="47px 47px 43px 55px"
					/>
					{"        "}
					<Input
						background="#F7F8F9"
						border-radius="4px"
						border-width="0px"
						name="Name"
						placeholder="Name"
						color="#9FA3A7"
						font="400 14px/17px --fontFamily-googleMontserrat"
						margin="0px 0px 12px 0px"
						padding="16px 16px 16px 19px"
						width="100%"
					/>
					<Input
						background="#F7F8F9"
						border-radius="4px"
						border-width="0px"
						name="Phone"
						placeholder="Phone"
						color="#9FA3A7"
						font="400 14px/17px --fontFamily-googleMontserrat"
						padding="16px 16px 16px 19px"
						margin="0px 0px 12px 0px"
						width="100%"
					/>
					<Input
						background="#F7F8F9"
						border-radius="4px"
						border-width="0px"
						name="Massage"
						placeholder="Massage"
						color="#9FA3A7"
						font="400 14px/17px --fontFamily-googleMontserrat"
						padding="16px 16px 16px 19px"
						margin="0px 0px 30px 0px"
						width="100%"
						as="textarea"
						height="133px"
					/>
					<Button
						background="#F05638;"
						font="--button"
						letter-spacing="2.4px"
						height="43px"
						width="100%"
						border-radius="50px"
						color="#ffffff"
						margin="0px 0px 0px 14px"
					>
						BUY NOW{"\n\n\n\n\n\n"}
					</Button>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="--primaryGradient" padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" max-width="none" />
			<StackItem width="100%" display="flex" padding="0px 0px 0px 0px">
				<Override
					slot="StackItemContent"
					align-items="center"
					flex-direction="column"
					background="url(https://ukit.top/quarkly/2/Img-2-.png),linear-gradient(180deg, rgba(235, 242, 243, 0.9) 28.65%, rgba(218, 218, 218, 0) 100%)"
					padding="50px 0px 308px 0px"
				/>
				{"        "}
				<Text
					font="--headline2"
					margin="0px 0px 24px 0px"
					display="inline-block"
					color="--dark"
					letter-spacing="2.4px"
					sm-font="normal 500 30px/48px Arvo, serif"
				>
					Our contacts{"\n\n"}
				</Text>
				<Text
					font="--base"
					margin="0px 0px 52px 0px"
					display="inline-block"
					color="#9FA3A7"
					text-align="center"
				>
					This new-found knowledge may then be used by{" "}
					<br />
					engineers to create new tools and machines,{"\n\n\n\n\n\n"}
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section background="#1C1C1C" padding="80px 0 70px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem
					width="25%"
					display="flex"
					padding="0px 0px 0px 0px"
					lg-width="100%"
					lg-align-items="center"
					sm-margin="0px 0px 20px 0px"
				>
					<Override slot="StackItemContent" align-items="center" lg-justify-content="center" />
					{"        "}
					<Image width="118px" src="https://ukit.top/quarkly/2/Landing.png" height="39px" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					padding="0px 0px 0px 0px"
					lg-width="100%"
					lg-align-items="center"
					lg-justify-content="center"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-end"
						lg-justify-content="center"
						sm-margin="0px 0px 20px 0px"
					/>
					{"        "}
					<Menu display="flex" sm-flex-direction="column">
						<Override slot="item-index" display="none" />
						<Override slot="item-404" display="none" />
						<Override
							slot="link"
							font="bold 12px/15px --fontFamily-googleMontserrat"
							letter-spacing="2.4px"
							text-decoration-line="initial"
							color="#ffffff"
							padding="0px 0px 0px 0px"
						/>
						<Override slot="item" padding="6px 33px 6px 31px" sm-text-align="center" sm-padding="10px 33px 10px 31px" />
					</Menu>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					display="flex"
					padding="0px 0px 0px 0px"
					lg-width="100%"
					lg-align-items="center"
					lg-justify-content="center"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" lg-justify-content="center" />
					{"        "}
					<SocialMedia
						facebook="https://www.facebook.com/quarklyapp/"
						twitter="https://twitter.com/quarklyapp"
						youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
						vkontakte="https://vk.com/quarklyapp"
						telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
					>
						<Override
							slot="link"
							order="2"
							color="#ffffff"
							background="rgba(255, 255, 255, 0)"
							padding="8px 14px 8px 14px"
							font="12px sans-serif"
							width="24px"
						/>
						<Override slot="link-twitter" order="1" />
						<Override slot="link-facebook" order="2">
							<div />
						</Override>
						<Override slot="link-vkontakte" display="none" />
						<Override slot="icon" font="13px sans-serif" />
					</SocialMedia>
					{"    "}
				</StackItem>
			</Stack>
			<Hr border-color="#4F4F4F" width="100%" margin="47px 0px 47px 0px" />
			<Stack>
				<StackItem width="100%" display="flex" padding="0px 0px 0px 0px">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text color="rgba(200, 200, 200, 0.5)" font="normal 500 14px/22px --fontFamily-googleOpenSans">
						© 2019 Landing. All rights reserved.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}{"    "}
			</Stack>
		</Section>
	</Theme>;
});