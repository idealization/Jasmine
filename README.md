# Jasmine
CAU 2021-2 Capstone Design Project Repository   
Check more Detail at [Link]()   
Check out Presentation at [Link](https://youtu.be/AJ_jO4Orc58)

## 👪 Teammates
- Team name: **자신만만 스피치 비타민, 자스민(Jasmine)**
- **Seunguk Yu**: School of Computer Science & Engineering in CAU   
- **Bolim Lee**: School of Computer Science & Engineering in CAU   
- **Sanghwa Lee**: School of Computer Science & Engineering in CAU

## 💡 Prototype
**Entire Logic**: Overall UI logic for our Jasmine serivce
![image](https://user-images.githubusercontent.com/80081345/144620776-15dbdcc2-a138-473c-84e4-6771fed889b6.png)

**Landing Page**: Introduce our speech coaching service, allow user login & logout and starting service
![image](https://user-images.githubusercontent.com/80081345/144620118-70730e4d-e247-4432-905d-6c2653e9c276.png)

**Action Page**: Start speech practice, allow checking our kid's speech analysis and user's flower(reward)
![image](https://user-images.githubusercontent.com/80081345/144620224-13cf2665-289a-42c4-ac5c-d60031539616.png)

**Speech Page 1**: When the direction of the head is correct, a koala appears and compliments
![image](https://user-images.githubusercontent.com/80081345/144621208-963cad27-afef-4665-831f-ff6a7321a71b.png)

**Speech Page 2**: When the direction of the head is wrong, a sloth appears and gives caution
![image](https://user-images.githubusercontent.com/80081345/144621303-fcc0dc1e-a141-4732-b586-f6ffae88651f.png)

**Speech Page 3**: When you can't see the child's face, a sloth appears and gives caution
![image](https://user-images.githubusercontent.com/80081345/144621706-bb0247dd-0495-4b6b-aebf-6d51da165ac7.png)

**Analysis Page 1**: Voice analysis results are presented on the parent interface
![image](https://user-images.githubusercontent.com/80081345/144621825-ac4b2991-24ce-4df7-b8fc-55ae33320c2b.png)

**Analysis Page 2**: Text analysis results are presented on the parent interface
![image](https://user-images.githubusercontent.com/80081345/144622052-24386582-c083-46aa-811a-cfcc61e0b2ef.png)

## 🚂 Pipeline
### 1. User sign up and Login at landing page
### 2. Start speech practice at action page
### 3. Make a presentation of kid's speech during the presentation is being recorded
Attitude Analysis (Video processing): by Blazeface, Gaze-Detection   
Voice Analysis (Audio Processing): by Webrtcvad, Librosa, FFmpeg   
Text Analysis (Nature Language Processing): by TextRank, Kss, Konlpy
### 4. Check the results of the presentation analysis
Child interface and parent interface are separated in a result of the presentation analysis
