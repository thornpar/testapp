angular
    .module('testModule')
    .factory('testModule.characterListService',[characterListService]);

function characterListService() {
    var characterList  = [
        {
            name : 'John Snow',
            age : 17,
            bio : "Jon is introduced in 1996's A Game of Thrones as the illegitimate son of Ned Stark, the honorable lord of Winterfell, an ancient fortress in the North of the fictional kingdom of Westeros. He subsequently appears in Martin's A Clash of Kings (1998) and A Storm of Swords (2000). Jon makes a brief appearance in 2005's A Feast for Crows,[3][4] and returns as a prominent character in the next novel A Dance with Dragons (2011)",
            image: 'john_snow.jpg'
        },
        {
            name : 'Tyrion Lannister',
            age : 35,
            bio : "Introduced in 1996's A Game of Thrones, Tyrion is a dwarf and member of House Lannister, one of the wealthiest and most powerful families in the fictional kingdom of Westeros. He subsequently appeared in Martin's A Clash of Kings (1998) and A Storm of Swords (2000). Tyrion was one of a few prominent characters that were not included in 2005's A Feast for Crows, but returned in the next novel A Dance with Dragons (2011). The character will also appear in the forthcoming volume The Winds of Winter.[5][6] The popularity of the character led Martin and Bantam Books to publish The Wit & Wisdom of Tyrion Lannister, an illustrated collection of Tyrion quotes from the novels, in 2013.",
            image: 'tyrion_lannister.jpg'
        },
        {
            name : 'Sansa Stark',
            age: 15,
            bio: "Sansa Stark begins the novel by being betrothed to Crown Prince Joffrey Baratheon, believing Joffrey to be a gallant prince. While Joffrey and Sansa are walking through the woods, Joffrey notices Arya sparring with the butchers boy, Mycah. A fight breaks out and Joffrey is attacked by Nymeria (Arya's Direwolf) after Joffrey threatens to hurt Arya. Sansa lies to King Robert about the circumstances of the fight in order to protect Joffrey. Since Arya ran off her wolf to save it, Sansa's wolf is killed instead, estranging the Stark daughters.",
            image: 'sansa_stark.jpg'
        },
        {
            name: 'Ned Stark',
            age: 35,
            bio: "Ned is portrayed by Sean Bean in the first season of HBO's adaptation of the series, Game of Thrones,[3][4] and as a child and young man by Sebastian Croft and Robert Aramayo respectively in the sixth season. Bean was nominated for a Saturn Award for Best Actor on Television and a Scream Award for Best Fantasy Actor for the role. He and the rest of the cast were nominated for Screen Actors Guild Awards for Outstanding Performance by an Ensemble in a Drama Series in 2011.",
            image: 'ned_stark.jpg'
        },
        {
            name: 'Ramsay Bolton',
            age: 25,
            bio: "Introduced in 1998's A Clash of Kings, Ramsay is the eldest son of Roose Bolton, the lord of the Dreadfort, an ancient fortress in the North of the fictional kingdom of Westeros. He is subsequently mentioned in A Storm of Swords (2000) and A Feast for Crows (2005). He later appears in Martin's A Dance with Dragons (2011).",
            image: 'ramsay_bolton.jpg'
        },
        {
            name :' Daenerys Targaryen',
            age: 20,
            bio: "Introduced in 1996's A Game of Thrones, Daenerys (along with her older brother, Viserys) is one of the last confirmed members of House Targaryen who, until fifteen years before the events of the first novel, ruled on the Iron Throne for nearly three hundred years. She subsequently appeared in Martin's A Clash of Kings (1998) and A Storm of Swords (2000). Daenerys was one of a few prominent characters not included in 2005's A Feast for Crows, but returned in the next novel A Dance with Dragons (2011)",
            image: 'daenerys_targaryen.jpg'
        }
    ];

    return {
        getCharacterList : getCharacters,
        getCharacterByName : getCharacterByName
    };

    function getCharacters() {
        return characterList;
    }
    function getCharacterByName(name) {

        for(var i = 0; i<characterList.length;i++){
            if(characterList[i].name === name){
                return characterList[i];
            }
        }
        throw Error('Not found');
    }
}