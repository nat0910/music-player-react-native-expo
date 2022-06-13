from flask import Flask , send_file
import json
app = Flask(__name__)

@app.route("/")
def home():
    return send_file("./song_lib.json")

@app.route("/music/<id>")
def music(id):
    if (id=="869020f3-eca3-4c60-9d23-6902be023bb8"):
        return send_file('D:/projects/new react-native/intership/music_player_api/songs/Nirvana-Come_as_you_are_lyrics_(getmp3.pro).mp3')
    elif(id=="c25f240e-f8ac-4a88-b5f6-e38746a88102"):
        return send_file('D:/projects/new react-native/intership/music_player_api/songs/OneRepublic_-_Counting_Stars_Lyric_(getmp3.pro).mp3')
    elif(id=="028a15a9-64d2-4f5f-9dc0-c1f562781a51"):
        return send_file('D:/projects/new react-native/intership/music_player_api/songs/The_Weeknd_-_Blinding_Lights_Lyric_(getmp3.pro).mp3')
    elif(id=="5e0301bf-23a4-4b78-bc0e-882a6d7500e5"):
        return send_file('D:/projects/new react-native/intership/music_player_api/songs/The_Animals_-_The_House_of_the_Risi_(getmp3.pro).mp3')
    elif(id=="eeea1069-6733-499a-9ee9-b227535e6c9e"):
        return send_file('D:/projects/intership/music_player_api/songs/Azazal__Said_-_I_Said_Meow.mp3')
    elif(id=="16ce65e3-56da-41c2-a3c4-7b150b68775b"):
        return send_file('D:/projects/new react-native/intership/music_player_api/songs/Eminem_-_Mockingbird_Lyrics_(getmp3.pro).mp3')
    elif(id=="ff65ad29-0621-404f-91e5-5d4f304f8e21"):
        return send_file('D:/projects/new react-native/intership/music_player_api/songs/Imagine_Dragons_-_Natural_Lyrics_(getmp3.pro).mp3')
    elif(id=="f23cdb9a-3e7c-420e-a5b3-955f7068822d"):
        return send_file('D:/projects/new react-native/intership/music_player_api/songs/Queen_-_Bohemian_Rhapsody_with_lyr_(getmp3.pro).mp3')
    elif(id=="a8315f21-998a-4bac-9f0e-90079108e61c"):
        return send_file('D:/projects/new react-native/intership/music_player_api/songs/Maroon_5_-_Moves_Like_Jagger_Lyric_(getmp3.pro).mp3')
    elif(id=="3cfae664-eacd-40fe-b253-4b27dd89c57b"):
        return send_file('D:/projects/new react-native/intership/music_player_api/songs/Careless_Whisper-_George_Michael_L_(getmp3.pro).mp3')

@app.route("/images/<id>")
def images(id):
    if (id=="869020f3-eca3-4c60-9d23-6902be023bb8"):
        return send_file('D:/projects/new react-native/intership/music_player_api/albums_cover/niravana_nevremind_cover.jpg')
    elif(id=="c25f240e-f8ac-4a88-b5f6-e38746a88102"):
        return send_file('D:/projects/new react-native/intership/music_player_api/albums_cover/onerepublic_native.jpg')
    elif(id=="028a15a9-64d2-4f5f-9dc0-c1f562781a51"):
        return send_file('D:/projects/new react-native/intership/music_player_api/albums_cover/The_Weeknd_-_After_Hours.png')
    elif(id=="5e0301bf-23a4-4b78-bc0e-882a6d7500e5"):
        return send_file('D:/projects/new react-native/intership/music_player_api/albums_cover/the_animals_the_single_plus.jpg')
    elif(id=="ff65ad29-0621-404f-91e5-5d4f304f8e21"):
        return send_file('D:/projects/new react-native/intership/music_player_api/albums_cover/imagine dragons origins.jpg')
    elif(id=="eeea1069-6733-499a-9ee9-b227535e6c9e"):
        return send_file('D:/projects/new react-native/intership/music_player_api/albums_cover/Azazal__Said_-_I_Said_Meow.jpg')
    elif(id=="16ce65e3-56da-41c2-a3c4-7b150b68775b"):
        return send_file('D:/projects/new react-native/intership/music_player_api/albums_cover/encore_enimem.webp')
    elif(id=="f23cdb9a-3e7c-420e-a5b3-955f7068822d"):
        return send_file('D:/projects/new react-native/intership/music_player_api/albums_cover/bohemian rhapsody.jpg')        
    elif(id=="a8315f21-998a-4bac-9f0e-90079108e61c"):
        return send_file('D:/projects/new react-native/intership/music_player_api/albums_cover/maroon5_movelikejagger.jpg')
    elif(id=="3cfae664-eacd-40fe-b253-4b27dd89c57b"):
        return send_file('D:/projects/new react-native/intership/music_player_api/albums_cover/best of george michael.jpg')