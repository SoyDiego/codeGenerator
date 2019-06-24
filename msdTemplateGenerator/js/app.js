let templateTitle;
let countLogos;
let mainTitle;
let preHeader;
let preHeaderText;
let countSocialMedia;
let codex;

let preHeaderFinal;
let countLogosFinal;
let socialMediaFinal;
let copyCode;
let finalCode;

function generate() {
	templateTitle = document.querySelector("#templateTitle");
	countLogos = document.querySelector("input[name=logos]:checked");
	mainTitle = document.querySelector("#mainTitle");
	preHeader = document.querySelector("input[name=preheader]:checked");
	preHeaderText = preHeaderText = document.querySelector("#preHeader");
	countSocialMedia = document.querySelector("input[name=socialMedia]:checked");
	codex = document.querySelector("#codex");
	copyCode = document.querySelector("#copyCode");

	if (preHeader.value === "yes") {
		preHeaderFinal = `<!-- PREHEADER, NO CAMBIAR A MENOS DE QUE LO NOTIFIQUEN -->
        <span style="display: none !important;visibility: hidden;opacity: 0;color: #eaeced;font-size:1px;height: 0;width: 0;	line-height:0; overflow:hidden;mso-hide:all;">
            ${preHeaderText.value}
        </span>
		<!-- FIN DEL PREHEADER -->`;
	} else {
		preHeaderFinal = "<!-- ACÁ IRÍA EL PREHEADER  -->";
	}

	switch (countLogos.value) {
		case "1":
			countLogosFinal = `<table width="540" cellpadding="0" cellspacing="0" border="0" align="center" style="width: 540px;">
                                    <tr>
                                        <td width="540" align="left">
                                            <a href="https://profesionales.msd.es/medicos/recursos_profesionales/event-detail.xhtml?TrainingeventsID=14382&utm_campaign=inmunologia&project=inmunologia&compositeKey=2019-ESid-T000000001&p_type=login&p_title=20190603_workshop_manejo_tbc_pacientes&imtoken=&etatoken={{Account.MSD_CORE_WP_Token__c}}" target="_blank">
                                                <img src="images/msd_logo.png" alt="LOGOTIPO MSD PROFESIONALES SANITARIOS" border="0" width="92" height="34">
                                            </a>
                                        </td>
                                    </tr>
                                </table>`;
			break;
		case "2":
			countLogosFinal = `<table width="540" cellpadding="0" cellspacing="0" border="0" align="center" style="width: 540px;">
                                    <tr>
                                        <td width="270" align="left">
                                            <a href="https://profesionales.msd.es/medicos/recursos_profesionales/event-detail.xhtml?TrainingeventsID=14382&utm_campaign=inmunologia&project=inmunologia&compositeKey=2019-ESid-T000000001&p_type=login&p_title=20190603_workshop_manejo_tbc_pacientes&imtoken=&etatoken={{Account.MSD_CORE_WP_Token__c}}" target="_blank">
                                                <img src="images/msd_logo.png" alt="LOGOTIPO MSD PROFESIONALES SANITARIOS" border="0" width="92" height="34">
                                            </a>
                                        </td>

                                        <td width="270" align="right">
                                            <a href="https://profesionales.msd.es/medicos/recursos_profesionales/event-detail.xhtml?TrainingeventsID=14382&utm_campaign=inmunologia&project=inmunologia&compositeKey=2019-ESid-T000000001&p_type=login&p_title=20190603_workshop_manejo_tbc_pacientes&imtoken=&etatoken={{Account.MSD_CORE_WP_Token__c}}" target="_blank">
                                                <img src="images/msd-logo2.png" alt="LOGOTIPO MSD PROFESIONALES SANITARIOS" border="0" width="137" height="37">
                                            </a>
                                        </td>
                                    </tr>
                                </table>`;
			break;

		default:
			break;
	}

	switch (countSocialMedia.value) {
		case "1":
			socialMediaFinal = `<!-- Si se quitan iconos de red social, modificar el width del table. -->
                                <table width="120" border="0" cellspacing="0" cellpadding="0" align="center" style="width: 120px;">
                                    <tr>
                                        <td width="80" align="center" style="font-family: sans-serif, Arial; color: #7e8890; font-size: 16px; mso-line-height-rule:exactly; line-height: 18px; margin: 0; text-align: center;">
                                            Síganos:
                                        </td>

                                        <td width="32" align="center">
                                            <a href="https://twitter.com/msd_es" target="_blank">
                                                <img src="images/twitter.png" alt="Twitter" style="display: block; overflow: hidden;" border="0" width="32" height="32">
                                            </a>
                                        </td>
                                    </tr>
                                </table>`;
			break;
		case "2":
			socialMediaFinal = `<!-- Si se quitan iconos de red social, modificar el width del table. -->
                                <table width="160" border="0" cellspacing="0" cellpadding="0" align="center" style="width: 160px;">
                                    <tr>
                                        <td width="80" align="center" style="font-family: sans-serif, Arial; color: #7e8890; font-size: 16px; mso-line-height-rule:exactly; line-height: 18px; margin: 0; text-align: center;">
                                            Síganos:
                                        </td>

                                        <td width="32" align="center">
                                            <a href="https://twitter.com/msd_es" target="_blank">
                                                <img src="images/twitter.png" alt="Twitter" style="display: block; overflow: hidden;" border="0" width="32" height="32">
                                            </a>
                                        </td>

                                        <td width="10"></td>

                                        <td width="32" align="center">
                                            <a href="https://youtube.com" target="_blank">
                                                <img src="images/youtube.png" alt="YouTube" style="display: block; overflow: hidden;" border="0" width="32" height="32">
                                            </a>
                                        </td>
                                    </tr>
                                </table>`;
			break;
		case "3":
			socialMediaFinal = `<!-- Si se quitan iconos de red social, modificar el width del table. -->
                                <table width="205" border="0" cellspacing="0" cellpadding="0" align="center" style="width: 205px;">
                                    <tr>
                                        <td width="80" align="center" style="font-family: sans-serif, Arial; color: #7e8890; font-size: 16px; mso-line-height-rule:exactly; line-height: 18px; margin: 0; text-align: center;">
                                            Síganos:
                                        </td>

                                        <td width="32" align="center">
                                            <a href="https://twitter.com/msd_es" target="_blank">
                                                <img src="images/twitter.png" alt="Twitter" style="display: block; overflow: hidden;" border="0" width="32" height="32">
                                            </a>
                                        </td>

                                        <td width="10"></td>

                                        <td width="32" align="center">
                                            <a href="https://youtube.com" target="_blank">
                                                <img src="images/youtube.png" alt="YouTube" style="display: block; overflow: hidden;" border="0" width="32" height="32">
                                            </a>
                                        </td>

                                        <td width="10"></td>

                                        <td width="32" align="center">
                                            <a href="https://linkedin.com" target="_blank">
                                                <img src="images/linkedin.png" alt="LinkedIn" style="display: block; overflow: hidden;" border="0" width="32" height="32">
                                            </a>
                                        </td>
                                    </tr>
                                </table>`;
			break;

		default:
			break;
	}

	finalCode = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <title>${templateTitle.value}</title>
        <style type="text/css">
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
        </style>

        <!-- 120 DPI -->
        <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
        <![endif]-->
    </head>

    <body style="background-color:#eaeced;font-family: Arial, Helvetica, sans-serif">
        ${preHeaderFinal}
        <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;width: 600px;">
            <tr>
                <td style="height:20px;"></td>
            </tr>
            <!-- COMIENZO DEL CODIGO DEL BODY DEL TEMPLATE -->
            <tr>
                <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;background-color:#ffffff;width: 600px;">
                        <tr>
                            <td style="height:20px;"></td>
                        </tr>
                        <!-- BLOQUE 1 - BLOQUE DE LOS LOGOS, Si es un logo el width del TD es 540, si son, la mitad: 270. -->
                        <tr>
                            <td>
                                ${countLogosFinal}
                            </td>
                        </tr>
                        <!-- FIN BLOQUE 1 - BLOQUE DE LOS LOGOS -->

                        <!-- ESTA DISTANCIA PUEDE CAMBIAR SEGÚN EL PSD. CHEQUEAR. -->
                        <tr>
                            <td height="60"></td>
                        </tr>

                        <!-- BLOQUE 2 - BLOQUE DEL TITULO -->
                        <tr>
                            <td>
                                <table width="540" border="0" cellspacing="0" cellpadding="0" align="center" style="width: 540px;">
                                    <tr>
                                        <td width="540" align="center" style="font-family: Arial, Open Sans; font-size: 25px; line-height: 26px; color:#00877c; padding-left:0; padding-right:0;margin-top: 0;margin-bottom: 0;">
                                            <strong>${mainTitle.value}</strong>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- FIN BLOQUE 2 - BLOQUE DEL TITULO -->
                        <tr>
                            <td height="20"></td>
                        </tr>

                        <!-- BLOQUE 3 - BLOQUE DEL BANNER -->
                        <tr>
                            <td>
                                <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" style="width: 600px">
                                    <tr>
                                        <td width="600">
                                            <a href="https://profesionales.msd.es/medicos/recursos_profesionales/event-detail.xhtml?TrainingeventsID=14382&utm_campaign=inmunologia&project=inmunologia&compositeKey=2019-ESid-T000000001&p_type=login&p_title=20190603_workshop_manejo_tbc_pacientes&imtoken=&etatoken={{Account.MSD_CORE_WP_Token__c}}" target="_blank">
                                                <img src="images/banner.png" alt="Banner body" style="display: block; overflow: hidden;" border="0" width="600">
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- FIN BLOQUE 3 - BLOQUE DEL BANNER -->
                        <tr>
                            <td height="30"></td>
                        </tr>

                        <!-- BLOQUE 4 - BLOQUE DEL BODY -->
                        <tr>
                            <td>
                                <table width="540" border="0" cellspacing="0" cellpadding="0" align="center" style="width: 540px">
                                    <!-- BLOQUE 1 DE TEXTO -->
                                    <tr>
                                        <td align="center" width="540" style="font-family: Arial, Open Sans; font-size: 14px; line-height: 21px; text-align: left; color:#3f484a; padding-left:0; padding-right:0;margin-top: 0;margin-bottom: 0;">
                                            {{customText[Estimado Dr.|Estimada Dra. |Apreciado Sr.|Apreciada Sra.]}} {{accLname}},
                                        </td>
                                    </tr>
                                    <!-- FIN BLOQUE 1 DE TEXTO -->
                                    <tr>
                                        <td height="20"></td>
                                    </tr>
                                    <!-- BLOQUE 2 DE TEXTO -->
                                    <tr>
                                        <td align="center" width="540" style="font-family: Arial, Open Sans; font-size: 14px; line-height: 21px; text-align: left; color:#3f484a; padding-left:0; padding-right:0;margin-top: 0;margin-bottom: 0;">
                                            El próximo 5 de junio a las 17:45 h se llevará a cabo el <strong><i>Workshop de Manejo Tuberculosis en Pacientes con Terapia Biológica,</i></strong> con la siguiente agenda:
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="20"></td>
                                    </tr>

                                    <!-- Linea Separadora -->
                                    <tr>
                                        <td style="background-color:#74d0b5; height: 3px;" width="540" height="3"></td>
                                    </tr>
                                    <!-- FIN Linea Separadora -->

                                    <!-- FIN BLOQUE 2 DE TEXTO -->
                                    <tr>
                                        <td height="20"></td>
                                    </tr>

                                    <!-- ETC... -->
                                    <tr>
                                        <td align="center" width="540" style="font-family: Arial, Open Sans; font-size: 14px; line-height: 21px; text-align: left; color:#3f484a;">
                                            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>Dr. Daniel Carpio | Complexo Hospitalario U. de Pontevedra.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" width="540" style="font-family: Arial, Open Sans; font-size: 14px; line-height: 21px; text-align: left; color:#3f484a;">
                                            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>Dra. Marina Rodríguez López | Complejo Hospitalario de Santiago.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" width="540" style="font-family: Arial, Open Sans; font-size: 14px; line-height: 21px; text-align: left; color:#3f484a;">
                                            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>Dr. Luis Anibarro García | Complejo Hospitalario de Pontevedra.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="20"></td>
                                    </tr>
                                    <!-- Linea Separadora -->
                                    <tr>
                                        <td style="background-color:#74d0b5; height: 3px;" width="540" height="3"></td>
                                    </tr>
                                    <!-- FIN Linea Separadora -->

                                    <tr>
                                        <td height="20"></td>
                                    </tr>

                                    <tr>
                                        <td align="center" width="540" style="font-family: Arial, Open Sans; font-size: 14px; line-height: 21px; text-align: left; color:#3f484a; padding-left:0; padding-right:0;margin-top: 0;margin-bottom: 0;">
                                            Esta sesión será retransmitida por <i>streaming</i> a través de MSD Profesionales y le animamos a registrarse y conectarse a través del siguiente enlace:
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="40"></td>
                                    </tr>

                                    <!-- BOTON -->
                                    <tr>
                                        <td width="540" align="center">
                                            <div>
                                                <!--[if mso]>
                                                  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://profesionales.msd.es/medicos/recursos_profesionales/event-detail.xhtml?TrainingeventsID=14382&utm_campaign=inmunologia&project=inmunologia&compositeKey=2019-ESid-T000000001&p_type=login&p_title=20190603_workshop_manejo_tbc_pacientes&imtoken=&etatoken={{Account.MSD_CORE_WP_Token__c}}" target="_blank" style="height:45px;v-text-anchor:middle;width:160px;" stroke="f" arcsize="13%" fillcolor="#00867b" arcsize="13%">
                                                    <w:anchorlock/>
                                                    <center>
                                                  <![endif]-->
                                                <a href="https://profesionales.msd.es/medicos/recursos_profesionales/event-detail.xhtml?TrainingeventsID=14382&utm_campaign=inmunologia&project=inmunologia&compositeKey=2019-ESid-T000000001&p_type=login&p_title=20190603_workshop_manejo_tbc _pacientes&imtoken=&etatoken={{Account.MSD_CORE_WP_Token__c}}" target="_blank" style="background-color:#00867b;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:20px;font-weight:bold;line-height:45px;text-align:center;text-decoration:none;width:150px;-webkit-text-size-adjust:none; border-radius: 5px">ACCEDA</a>
                                                <!--[if mso]>
                                                    </center>
                                                  </v:rect>
                                                 <![endif]-->
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- FIN BOTON -->

                                    <tr>
                                        <td height="40"></td>
                                    </tr>
                                    <tr>
                                        <td align="center" width="540" style="font-family: Arial, Open Sans; font-size: 14px; line-height: 21px; text-align: left; color:#3f484a; padding-left:0; padding-right:0;margin-top: 0;margin-bottom: 0;">
                                            Por otro lado, para este evento se realizarán preguntas a través de la aplicación <strong>Kahoot.it</strong> la cual puede descargar o acceder a través de la web.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="40"></td>
                                    </tr>
                                    <tr>
                                        <td align="center" width="540" style="font-family: Arial, Open Sans; font-size: 14px; line-height: 21px; text-align: left; color:#3f484a; padding-left:0; padding-right:0;margin-top: 0;margin-bottom: 0;">
                                            Le esperamos.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="20"></td>
                                    </tr>
                                    <tr>
                                        <td align="center" width="540" style="font-family: Arial, Open Sans; font-size: 14px; line-height: 21px; text-align: left; color:#3f484a; padding-left:0; padding-right:0;margin-top: 0;margin-bottom: 0;">
                                            Un saludo,<br>
                                            {{userName}}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- FIN BLOQUE 4 - BLOQUE DEL BODY -->

                        <!-- TR/TD SEPARADOR PARA DEJAR ESPACIO EN BLANCO AL FINAL DEL BODY -->
                        <tr>
                            <td height="30"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <!-- FIN DEL CODIGO DEL BODY DEL TEMPLATE -->
            <!-- CODIGO DE FOOTER -->
            <tr>
                <td>
                    <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;background-color:#eaeced;width: 600px;">
                        <tr>
                            <td height="40"></td>
                        </tr>
                        <!-- BLOQUE DE LAS RRSS -->
                        <tr>
                            <td>
                                ${socialMediaFinal}
                            </td>
                        </tr>
                        <!-- FIN DEL BLOQUE DE LAS RRSS -->
                        <tr>
                            <td height="40"></td>
                        </tr>
                        <!-- BLOQUE DE TEXTO LEGAL -->
                        <tr>
                            <td>
                                <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="width: 540px;">
                                    <tr>
                                        <td width="540" align="center" style="font-family: Arial, Open Sans; font-size: 12px; line-height: 16px; text-align: left; color:#788189;">
                                            Este email ha sido enviado con carácter personal como usuario de MSD Profesionales Sanitarios, en caso de que lo reenvíe, será bajo su responsabilidad. Si lo ha recibido por error le agradecemos que nos lo notifique.
                                            <br><br>
                                            Si quiere dejar de recibir notificaciones de correo por parte de MSD Profesionales Sanitarios, comuníquenoslo a través de <a href="mailto:privacidad@merck.com" title="privacidad@merck.com" style="color:#139696;">privacidad@merck.com</a>
                                            <br><br>
                                            Le recordamos que MSD Profesionales Sanitarios es un portal para usuarios registrados que ofrece formación, información y servicios relacionados con las patologías y productos de MSD y que como usuario del mismo, Ud. tiene la ventaja de acceder a los diferentes recursos, servicios y novedades terapéuticas.
                                            <br><br>
                                            MSD<sup style="line-height: 1;">®</sup> es una marca registrada de Merck Sharp & Dohme Corp., una subsidiaria de Merck & Co., Inc., Kenilworth, NJ, USA. Copyright<sup style="line-height: 1;">®</sup> 2019 Todos los derechos reservados. <a href="http://www.msd.es" title="www.msd.es" style="color:#139696;">www.msd.es</a> Merck Sharp & Dohme de España, S.A. C/ Josefa Valcárcel, 38. 28027 - Madrid.
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- FIN BLOQUE DE TEXTO LEGAL -->
                        <tr>
                            <td height="30"></td>
                        </tr>
                        <!-- BLOQUE POLITICAS Y LINKS INFORMATIVOS PARTE 1 -->
                        <tr>
                            <td>
                                <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="width: 540px;">
                                    <tr>
                                        <td align="center" width="270" style="text-align: center;font-family: Arial, Open Sans; font-size: 12px;">
                                            <a href="https://profesionales.msd.es/medicos/politica-de-privacidad.xhtml? &etatoken={{Account.MSD_CORE_WP_Token__c}}" target="_blank" style="color: #139696">
                                                <strong>Política de privacidad</strong>
                                            </a>
                                        </td>
                                        <td align="center" width="270" style="text-align: center;font-family: Arial, Open Sans; font-size: 12px;">
                                            <a href="https://profesionales.msd.es/medicos/terminos-y-condiciones-de-uso.xhtml?utm_campaign=inmunologia&project=inmunologia&compositeKey=2019-ESid-T000000001&p_type=login&p_title=20190603_workshop_manejo_tbc_pacientes&imtoken=&etatoken={{Account.MSD_CORE_WP_Token__c}}" target="_blank" style="color: #139696">
                                                <strong>Términos y Condiciones</strong>
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- FIN BLOQUE POLITICAS Y LINKS INFORMATIVOS PARTE 1 -->
                        <tr>
                            <td height="15"></td>
                        </tr>
                        <!-- BLOQUE POLITICAS Y LINKS INFORMATIVOS PARTE 2 -->
                        <tr>
                            <td>
                                <table width="540" border="0" cellpadding="0" cellspacing="0" align="center" style="width: 540px;">
                                    <tr>
                                        <td align="center" width="270" style="text-align: center;font-family: Arial, Open Sans; font-size: 12px;">
                                            <a href="https://www.msdprivacy.com/es/es/transparency-and-privacy.html" target="_blank" style="color: #139696">
                                                <strong>Derechos sobre Datos Personales</strong>
                                            </a>
                                        </td>
                                        <td align="center" width="270" style="text-align: center;font-family: Arial, Open Sans; font-size: 12px;">
                                            <a href="http://profesionales.msd.es/medicos/viewprofile.xhtml?utm_campaign=inmunologia&project=inmunologia&compositeKey=2019-ESid-T000000001&p_type=login&p_title=20190603_workshop_manejo_tbc _pacientes&imtoken=" target="_blank" style="color: #139696">
                                                <strong>Gestione su perfil en MSD</strong>
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- FIN BLOQUE POLITICAS Y LINKS INFORMATIVOS PARTE 2 -->
                        <tr>
                            <td height="90"></td>
                        </tr>
                        <!-- BLOQUE CODEX Y LOGO -->
                        <tr>
                            <td>
                                <table width="540" border="0" cellspacing="0" cellpadding="0" align="center" style="width: 540px;">
                                    <tr>
                                        <td>
                                            <table align="center" width="540" border="0" cellspacing="0" cellpadding="0" style="width: 540px;">
                                                <tr>
                                                    <td width="270" valign="bottom" align="left" style="text-align: left; padding-left: 0;font-family: Arial, Open Sans; font-size: 12px; line-height: 17px; text-align: left; color:#788189;">
                                                        ${
																													codex.value
																												}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Creado: Junio 2019
                                                    </td>
                                                    <td align="right">
                                                        <a href="https://profesionales.msd.es/medicos/index.xhtml?utm_campaign=infecciosas&project=formacion&compositeKey=2019-ESid-T000000001&p_type=home&p_title=home&imtoken=&etatoken={{Account.MSD_CORE_WP_Token__c}}" target="_blank">
                                                            <img src="images/msd_footer.png" style="display: block; overflow: hidden;" alt="LOGOTIPO MSD PROFESIONALES SANITARIOS" border="0" width="131" height="35">
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- FIN BLOQUE CODEX Y LOGO -->
                    </table>
                </td>
            </tr>
            <!-- FIN DEL CODIGO DEL FOOTER -->
            <tr>
                <td height="20"></td>
            </tr> <!-- TR/TD SEPARADOR, DEJA UNA FRANJA GRIS FUERA DEL TEMPLATE PARA CREAR ESPACIO -->
        </table>
    </body>

</html>`;

	document.querySelector(".fourthPart").style.display = "flex";
	previewTemplate();
}

function preHeaderEnable() {
	preHeader = document.querySelector("input[name=preheader]:checked");
	preHeaderText = document.querySelector("#preHeader");

	if (preHeader.value === "yes") {
		preHeaderText.style.display = "block";
	} else {
		preHeaderText.value = "";
		preHeaderText.style.display = "none";
	}
}

function previewTemplate() {
	document.querySelector(".firstPart").style.display = "none";
	document.querySelector(".secondPart").style.display = "none";
	document.querySelector(".thirdPart").style.display = "none";
	document.querySelector("#generateCode").style.display = "none";
	document.querySelector("#copyCode").style.display = "block";
	document.querySelector("iframe").srcdoc = finalCode;
}

function resetAll() {
	document.querySelector(".firstPart").style.display = "flex";
	document.querySelector(".secondPart").style.display = "flex";
	document.querySelector(".thirdPart").style.display = "flex";
	document.querySelector(".fourthPart").style.display = "none";
	document.querySelector("#generateCode").style.display = "block";
	document.querySelector("#copyCode").style.display = "none";
	document.querySelector("#preHeader").style.display = "none";
	document.querySelector("form").reset();
}

function copyToClipboard() {
	copyCode.setAttribute("data-clipboard-text", finalCode);
	copyCode.textContent = "COPIED! :)";
	setTimeout(() => {
		copyCode.textContent = "Copy to Clipboard!";
	}, 1000);
}
