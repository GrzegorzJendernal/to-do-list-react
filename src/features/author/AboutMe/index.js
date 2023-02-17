import { Link, Wrapper } from "./styled";

const AboutMe = () => (
	<Wrapper>
		<p>
			Wraz z żoną wychowuję dwie córki, które są wulkanami niewyczerpanej energii.🌋 Interesuję się filozofią, historią i
			grami komputerowymi.
			Wychowałem się i mieszkam na Kaszubach. Od dziecka świetnie się czuję w otoczeniu licznych lasów i jezior.
			Uwielbiam bliski kontakt z naturą i uroki spokojnego, wiejskiego życia.🏞️</p>
		<p>
			Postanowiłem spróbować swoich sił z programowaniem, żeby znaleźć pracę, w której będę mógł się rozwijać i
			poszerzać swoje umiejętności łączac je ze swoim ogólnym zainteresowaniem branżą.💻
			Aplikacja, z której właśnie korzystasz jest efektem mojej nauki w{" "}
			<Link
				href="https://youcode.pl/"
				target="_blank"
				rel="noreferrer noopener"
				title="najlepszy kurs programowania"
			>
				YouCode - internetowej szkole IT (link otwiera się w nowej karcie)
			</Link>.
		</p>
	</Wrapper>
);

export default AboutMe;