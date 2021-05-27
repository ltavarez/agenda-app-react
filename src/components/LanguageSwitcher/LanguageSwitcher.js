import { useTranslation } from "react-i18next";
import { Row, Col, Form } from "react-bootstrap";

const LANGUAGES = {
  es: { nativeName: "Spanish" },
  en: { nativeName: "English" },
};

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  return (
    <Form className="mb-4">
      <Row>
        <Col>
          <Form.Group controlId="formBasicSelect">
            <Form.Label>{t("globals.select-language")}</Form.Label>
            <Form.Control
              as="select"
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              {Object.keys(LANGUAGES).map((lng) => (
                <option key={lng} value={lng}>
                  {LANGUAGES[lng].nativeName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default LanguageSwitcher;
