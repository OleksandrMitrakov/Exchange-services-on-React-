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
            inputValue: "",
            textareaValue: "Wpisz treść oferty"
        };
    };

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleTextareaChange(e) {
        this.setState({
            textareaValue: e.target.value
        });
    }

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

    render() {

        return (
            <div>
                <NavLine/>
                <div className="colLeft container">
                    <div className="containerForAnnouncementSettings">
                        <form>
                            <h2>Wybierz kategorię</h2>
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
                            <h2>Jesteś *</h2>
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
                            <h2>Typ ogłoszenia *</h2>
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
                                <h2>Tytuł *</h2>
                                <input
                                    className="announcementInput"
                                    type="text"
                                    value={this.state.value}
                                    onChange={this.handleInputChange}
                                />
                            </label>
                            <label>
                                <h2>Treść Oferty *</h2>
                                <textarea
                                    className="announcementTextArea"
                                    value={this.state.textareaValue}
                                    onChange={this.handleTextareaChange}
                                />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAnnouncementPage;

