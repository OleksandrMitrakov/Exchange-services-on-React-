import React, {Component} from 'react';
import '../.././sass/main.css';
import {RadioGroup, Radio} from 'react-radio-group'
import NavLine from './NavLine'


class AddAnnouncementPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedValueGroup1: "private",
            selectedValueGroup2: "offer",
            inputValue: " ",
            textareaValue: " ",
            priceValue: ""
        };

    };



    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleTextareaChange = (e) => {
        this.setState({
            textareaValue: e.target.value
        });
    };

    handleChange1 = (value) => {
        this.setState({
            selectedValueGroup1: value

        })
    };

    handleChange2 = (value) => {
        this.setState({
            selectedValueGroup2: value
        })
    };

    handleChangePrice = (e) => {
        this.setState({
            priceValue: e.target.value

        })
    };

    render() {

        const yourAnnouncementStyle = {
            backgroundColor: '#686868',
            color: '#ededed',
            padding: '10px 5px',
            width: '100%',
            marginLeft: '-10px',
            marginTop: '0px'
        };

        return (
            <div>
                <NavLine/>
                <div className="yourAnnouncement container">
                    <h3>Opublikuj ogłoszenie</h3>
                    <hr/>
                </div>
                <div className="colLeft container">
                    <div className="containerForAnnouncementSettings">
                        <form>
                            <h4 style={yourAnnouncementStyle}>Twoje ogłoszenie</h4>
                            <h4>Wybierz kategorię *</h4>
                            <select className="announcementInputStyle">
                                <option value="Nieruchomości">Nieruchomości</option>
                                <option value="Dom i Ogród">Dom i Ogród</option>
                                <option value="Elektronika">Elektronika</option>
                                <option value="Dla Dziecka">Dla Dziecka</option>
                                <option value="Zwierzaki">Zwierzaki</option>
                                <option value="Sport i Fitness">Sport i Fitness</option>
                                <option value="Moda">Moda</option>
                                <option value="Zdrowie i Uroda">Zdrowie i Uroda</option>
                                <option value="Muzyka i Rozrywka">Muzyka i Rozrywka</option>
                            </select>
                            <h4>Jesteś *</h4>
                            <RadioGroup
                                name="profLevel"
                                selectedValue={this.state.selectedValueGroup1}
                                onChange={this.handleChange1}>
                                <label>
                                    <Radio value="private"/>Osobnikiem
                                </label>
                                <label>
                                    <Radio value="professional"/>Profesionalistą
                                </label>
                            </RadioGroup>
                            <p style={{
                                backgroundColor: 'rgba(238, 147, 0, 0.5)',
                                display: this.state.selectedValueGroup1 === "private" ? "block" : "none"
                            }}>
                                There are many variations of passages of Lorem Ipsum available, but the majority
                                have suffered alteration in some form, by injected humour, or randomised words
                                which don't look even slightly believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                                middle of text.
                            </p>
                            <p style={{
                                backgroundColor: 'rgba(238, 147, 0, 0.5)',
                                display: this.state.selectedValueGroup1 === "professional" ? "block" : "none"
                            }}>
                                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
                                passage, and going through the cites of the word in classical literature,
                                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                                Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                                popular during the Renaissance.
                            </p>
                            <h4>Typ ogłoszenia *</h4>
                            <RadioGroup
                                name="typeOfAnnouncement"
                                selectedValue={this.state.selectedValueGroup2}
                                onChange={this.handleChange2}>
                                <label>
                                    <Radio value="offer"/>Oferuję
                                </label>
                                <label>
                                    <Radio value="lookingForOffer"/>Szukam
                                </label>
                            </RadioGroup>
                            <label>
                                <h4>Tytuł *</h4>
                                <input
                                    className="announcementInput"
                                    type="text"
                                    value={this.state.value}
                                    onChange={this.handleInputChange}
                                />
                            </label>
                            <label>
                                <h4>Treść Oferty *</h4>
                                <textarea
                                    className="announcementTextArea"
                                    value={this.state.textareaValue}
                                    onChange={this.handleTextareaChange}
                                />
                            </label>
                            <label>
                                <h4>Cena</h4>
                                <input
                                    className="announcementInputPrice"
                                    type="text"
                                    value={this.state.priceValue}
                                    onChange={this.handleChangePrice}
                                />
                                <span style={{marginLeft: '-30px'}}>zł</span>
                            </label>
                            <section id="pictures" className="toDisable">
                                <div className="label">
                                    Photos:
                                    <span className="fontRegular">reklama fotograficzna jest 7 razy bardziej popularna niż reklama bez zdjęcia</span>
                                </div>
                                <aside>
                                    <div className="photoGallery">
                                        <input type="file"/>
                                    </div>
                                </aside>

                            </section>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAnnouncementPage;

