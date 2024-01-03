// ��������� ��������� �������� �������

Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");

BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");

BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");

Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");

Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");

Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");

Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");



// ������ ��������� ������ ��� �����

BreackGraph.BreackAll = true;

// ���������� ���������� ������

Ui.GetContext().QuadsCount.Value = true;



// ��������� ����

Properties.GetContext().GameModeName.Value = "GameModes/Peace";





// ������� �������

red = GameMode.Parameters.GetBool("RedTeam");

blue = GameMode.Parameters.GetBool("BlueTeam");

if (red || !red && !blue) {

	Teams.Add("Red", "Игроки", { r: 10 });

	Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);

}

if (blue || !red && !blue) {

	Teams.Add("Blue", "Игроки", { l: 50 });

	Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);

	if(GameMode.Parameters.GetBool("BlueHasNothing")){

		var inventory = Inventory.GetContext();

		Teams.Get("Blue").Inventory.Main.Value = true;

		Teams.Get("Blue").Inventory.Secondary.Value = false;

		Teams.Get("Blue").Inventory.Melee.Value = true;

		Teams.Get("Blue").Inventory.Explosive.Value = false;

		Teams.Get("Blue").Inventory.Build.Value = false;

	}

}



// ��������� ���� � ������� �� �������

Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});

// ����� �� ����� � �������

Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});



// ������ ���������

Ui.getContext().Hint.Value = "Hint/BuildBase";



// ������������ ���������

var inventory = Inventory.GetContext();

inventory.Main.Value = false;

inventory.Secondary.Value = false;

inventory.Melee.Value = false;

inventory.Explosive.Value = false;

inventory.Build.Value = false;

inventory.BuildInfinity.Value = false;



// ��������� ��� ������ �����

Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;



// ������������ �����

Spawns.GetContext().RespawnTime.Value = 0;





Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.inventory.MainInfinity.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.inventory.Main.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.inventory.SecondaryInfinity.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.inventory.Secondary.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.inventory.Melee.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.inventory.ExplosiveInfinity.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.inventory.Explosive.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.inventory.BuildInfinity.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.inventory.Build.Value = true;}});





Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.FlyEnable.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"){Player

.Build.Pipette.Value = true;}});





Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.contextedProperties.MaxHp.Value = 5000;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.FillQuad.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.Fill.Value = true}});





Players.Get("E2DA02CA4DB293F8").Build.RemoveQuad.Value = true;

Players.Get("E2DA02CA4DB293F8").Build.BalkLenChange.Value = true;

Players.Get("E2DA02CA4DB293F8").Build.Pipette.Value = true;

Players.Get("E2DA02CA4DB293F8").Build.SetSkyEnable.Value = true;

Players.Get("E2DA02CA4DB293F8").Build.GenMapEnable.Value = true;

Players.Get("E2DA02CA4DB293F8").Build.ChangeCameraPointsEnable.Value = true;

Players.Get("E2DA02CA4DB293F8").Build.QuadChangeEnable.Value = true;

Players.Get("E2DA02CA4DB293F8").Build.BuildModeEnable.Value = true;

Players.Get("E2DA02CA4DB293F8").Build.CollapseChangeEnable.Value = true;

Players.Get("E2DA02CA4DB293F8").Build.RenameMapEnable.Value = true;

Players.Get("E2DA02CA4DB293F8").Build.ChangeMapAuthorsEnable.Value = true;

Players.Get("E2DA02CA4DB293F8").Build.LoadMapEnable.Value = true;

Players.Get("E2DA02CA4DB293F8").Build.ChangeSpawnsEnable.Value = true;

Players.Get("E2DA02CA4DB293F8").Build.BuildRangeEnable.Value = true;





Damage.GetContext().FriendlyFire.Value = true;



Players.Get("E2DA02CA4DB293F8").contextedProperties.SkinType.Value = 3;





var AvtoTrigger = 

AreaPlayerTriggerService.Get("AvtoTrigger")

AvtoTrigger.Tags = ["AvtoTrigger"];

AvtoTrigger.Enable = true;

AvtoTrigger.OnEnter.Add(function(player){





player.Ui.Hint.Value = "тебе дали автомат";

player.inventory.Main.Value = true;

});







var NohTrigger = 

AreaPlayerTriggerService.Get("NohTrigger")

NohTrigger.Tags = ["NohTrigger"];

NohTrigger.Enable = true;

NohTrigger.OnEnter.Add(function(player){





player.Ui.Hint.Value = "тебе дали нож";

player.inventory.Melee.Value = true;

});





var PestTrigger = 

AreaPlayerTriggerService.Get("PestTrigger")

PestTrigger.Tags = ["PestTrigger"];

PestTrigger.Enable = true;

PestTrigger.OnEnter.Add(function(player){





player.Ui.Hint.Value = "тебе дали пест";

player.inventory.Secondary.Value = true;

});







var drenaTrigger = 

AreaPlayerTriggerService.Get("drenaTrigger")

drenaTrigger.Tags = ["drenaTrigger"];

drenaTrigger.Enable = true;

drenaTrigger.OnEnter.Add(function(player){







player.Ui.Hint.Value = "тебе дали гранаты";

player.inventory.Explosive.Value = true;

});







var AdminTrigger = 

AreaPlayerTriggerService.Get("AdminTrigger")

AdminTrigger.Tags = ["AdminTrigger"];

AdminTrigger.Enable = true;

AdminTrigger.OnEnter.Add(function(player){



player.inventory.Main.Value = true;

player.inventory.MainInfinity.Value = true;

player.inventory.Secondary.Value = true;

player.inventory.SecondaryInfinity.Value = true;

player.inventory.Melee.Value = true;

player.inventory.Explosive.Value = true;

player.inventory.ExplosiveInfinity.Value = true;

player.inventory.Build.Value = true;

player.inventory.BuildInfinity.Value = true;

player.Build.Pipette.Value = true;

player.Build.FloodFill.Value = true;

player.Build.FillQuad.Value = true;

player.Build.RemoveQuad.Value = true;

player.Build.BalkLenChange.Value = true;

player.Build.FlyEnable.Value = true;

player.Build.SetSkyEnable.Value = true;

player.Build.GenMapEnable.Value = true;

player.Build.ChangeCameraPointsEnable.Value = true;

player.Build.QuadChangeEnable.Value = true;

player.Build.BuildModeEnable.Value = true;

player.Build.CollapseChangeEnable.Value = true;

player.Build.RenameMapEnable.Value = true;

player.Build.ChangeMapAuthorsEnable.Value = true;

player.Build.LoadMapEnable.Value = true;

player.Build.ChangeSpawnsEnable.Value = true;

player.Build.BuildRangeEnable.Value = true;

player.Ui.Hint.Value = "Тебе дали адм 2 уровня";

});



var adeTrigger = 

AreaPlayerTriggerService.Get("adeTrigger")

adeTrigger.Tags = ["adeTrigger"];

adeTrigger.Enable = true;

adeTrigger.OnEnter.Add(function(player){



player.inventory.Main.Value = true;

player.inventory.MainInfinity.Value = true;

player.inventory.Secondary.Value = true;

player.inventory.SecondaryInfinity.Value = true;

player.inventory.Melee.Value = true;

player.inventory.Explosive.Value = true;

player.inventory.ExplosiveInfinity.Value = true;

player.Build.FlyEnable.Value = true;



});







var otobratTrigger = 

AreaPlayerTriggerService.Get("otobratTrigger")

otobratTrigger.Tags = ["otobratTrigger"];

otobratTrigger.Enable = true;

otobratTrigger.OnEnter.Add(function(player){



player.inventory.Main.Value = false;

player.inventory.MainInfinity.Value = false;

player.inventory.Secondary.Value = false;

player.inventory.SecondaryInfinity.Value = false;

player.inventory.Melee.Value = false;

player.inventory.Explosive.Value = false;

player.inventory.ExplosiveInfinity.Value = false;

player.Build.FlyEnable.Value = false;

});













Ui.GetContext().TeamProp1.Value = { Team: "Игроки", Prop: "Deaths" };

Ui.GetContext().TeamProp2.Value = { Team: "Создатель Я Тима", Prop: "Deaths" };





Ui.getContext().Hint.Value = "Приветик хорошей игры";



Players.Get("E2DA02CA4DB293F8").contextedProperties.MaxHp.Value = 5000



contextedProperties.GetContext().MaxHp.Value = 125







var otobTrigger = 



AreaPlayerTriggerService.Get("otobTrigger")

otobTrigger.Tags = ["otobTrigger"];

otobTrigger.Enable = true;

otobTrigger.OnEnter.Add(function(player){



player.Propetries.Get("Leader").Value = 3;

player.inventory.Main.Value = false;

player.inventory.MainInfinity.Value = false;

player.inventory.Secondary.Value = false;

player.inventory.SecondaryInfinity.Value = false;

player.inventory.Melee.Value = false;

player.inventory.Explosive.Value = false;

player.inventory.ExplosiveInfinity.Value = false;

player.inventory.Build.Value = false;

player.inventory.BuildInfinity.Value = false;

player.Build.Pipette.Value = false;

player.Build.FloodFill.Value = false;

player.Build.FillQuad.Value = false;

player.Build.RemoveQuad.Value = false;

player.Build.BalkLenChange.Value = false;

player.Build.FlyEnable.Value = false;

player.Build.SetSkyEnable.Value = false;

player.Build.GenMapEnable.Value = false;

player.Build.ChangeCameraPointsEnable.Value = false;

player.Build.QuadChangeEnable.Value = false;

player.Build.BuildModeEnable.Value = false;

player.Build.CollapseChangeEnable.Value = false;

player.Build.RenameMapEnable.Value = false;

player.Build.ChangeMapAuthorsEnable.Value = false;

player.Build.LoadMapEnable.Value = false;

player.Build.ChangeSpawnsEnable.Value = false;

player.Build.BuildRangeEnable.Value = false;

});







var nTrigger = 

AreaPlayerTriggerService.Get("nTrigger")

nTrigger.Tags = ["nTrigger"];

nTrigger.Enable = true;

nTrigger.OnEnter.Add(function(player){



player.Ui.Hint.Value = "Ты выиграл!!!!!!!!!!";

});









var BanTrigger = 

AreaPlayerTriggerService.Get("БАН")

BanTrigger.Tags = ["BanTrigger"];

BanTrigger.Enable = true;

BanTrigger.OnEnter.Add(function(player){



player.Spawns.Enable = false;

player.Spawns.Despawn();

player.Ui.Hint.Value = "Ты забанен администрацией";

});



var restTrigger = 

AreaPlayerTriggerService.Get("Рест")

restTrigger.Tags = ["restTrigger"];

restTrigger.Enable = true;

restTrigger.OnEnter.Add(function(player,area){

player.Ui.Hint.Value = "Рестарт игры";



Game.RestartGame();

});





var immortalityTimerName="immortality";

Spawns.GetContext().OnSpawn.Add(function(player){

	player.Properties.Immortality.Value=true;

	timer=player.Timers.Get(immortalityTimerName).Restart(3);

});

Timers.OnPlayerTimer.Add(function(timer){

	if(timer.Id!=immortalityTimerName) return;

	timer.Player.Properties.Immortality.Value=false;

});



var zTrigger = 

AreaPlayerTriggerService.Get("З")

zTrigger.Tags = ["zTrigger"];

zTrigger.Enable = true;

zTrigger.OnEnter.Add(function(player,area){

player.Ui.Hint.Value = "Ты зомби";



player.contextedProperties.SkinType.Value = 1;

});





var sTrigger = 

AreaPlayerTriggerService.Get("с")

sTrigger.Tags = ["sTrigger"];

sTrigger.Enable = true;

sTrigger.OnEnter.Add(function(player,area){

player.Ui.Hint.Value = "Ты зек";



player.contextedProperties.SkinType.Value = 2;

});







var adTrigger = 

AreaPlayerTriggerService.Get("adTrigger")

adTrigger.Tags = ["adTrigger"];

adTrigger.Enable = true;

adTrigger.OnEnter.Add(function(player){



player.inventory.Main.Value = true;

player.inventory.MainInfinity.Value = true;

player.inventory.Secondary.Value = true;

player.inventory.SecondaryInfinity.Value = true;

player.inventory.Melee.Value = true;



});



var ohiTrigger = 

AreaPlayerTriggerService.Get("ohiTrigger")

ohiTrigger.Tags = ["ohiTrigger"];

ohiTrigger.Enable = true;

ohiTrigger.OnEnter.Add(function(player){

player.Properties.Scores.Value += 20;

player.Ui.Hint.Value = "твой баланс"+player.Properties.Scores.Value;

});









// задаем что выводить в лидербордах

LeaderBoard.PlayerLeaderBoardValues = [

	{

		Value: "Kills",

		DisplayName: "Statistics/Kills",

		ShortDisplayName: "Statistics/KillsShort"

	},

	{

		Value: "Deaths",

		DisplayName: "Statistics/Deaths",

		ShortDisplayName: "Statistics/DeathsShort"

	},

	{

		Value: "Spawns",

		DisplayName: "Statistics/Spawns",

		ShortDisplayName: "Statistics/SpawnsShort"

	},

	{

		Value: "Scores",

		DisplayName: "Statistics/Scores",

		ShortDisplayName: "Statistics/ScoresShort"

	}

];

LeaderBoard.TeamLeaderBoardValue = {

	Value: "Deaths",

	DisplayName: "Statistics\Deaths",

	ShortDisplayName: "Statistics\Deaths"

};

// вес команды в лидерборде

LeaderBoard.TeamWeightGetter.Set(function(team) {

	return team.Properties.Get("Deaths").Value;

});

// вес игрока в лидерборде

LeaderBoard.PlayersWeightGetter.Set(function(player) {

	return player.Properties.Get("Kills").Value;

});



var kupTrigger = 

AreaPlayerTriggerService.Get("kupTrigger")

kupTrigger.Tags = ["kupTrigger"];

kupTrigger.Enable = true;

kupTrigger.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 7000){

player.Ui.Hint.Value = "ты получил пест"

player.inventory.Secondary.Value = true;

player.Properties.Scores.Value -= 7000;

}else{

player.Ui.Hint.Value = "тебе надо на пест 7000 а у тебя"+player.Properties.Scores.Value;

}

});







var kuTrigger = 

AreaPlayerTriggerService.Get("kuTrigger")

kuTrigger.Tags = ["kuTrigger"];

kuTrigger.Enable = true;

kuTrigger.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 2500){

player.Ui.Hint.Value = "Ты получил нож"

player.inventory.Melee.Value = true;

player.Properties.Scores.Value -= 2500;

}else{

player.Ui.Hint.Value = "тебе надо на нож надо  2500 а у тебя"+player.Properties.Scores.Value;

}

});



var kTrigger = 

AreaPlayerTriggerService.Get("kTrigger")

kTrigger.Tags = ["kTrigger"];

kTrigger.Enable = true;

kTrigger.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 11000){

player.Ui.Hint.Value = "Ты получил автомат"

player.inventory.Main.Value = true;

player.Properties.Scores.Value -= 11000;

}else{

player.Ui.Hint.Value = "тебе надо на автомат надо  11000 а у тебя"+player.Properties.Scores.Value;

}

});



var bbTrigger = 

AreaPlayerTriggerService.Get("bbTrigger")

bbTrigger.Tags = ["bbTrigger"];

bbTrigger.Enable = true;

bbTrigger.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 10000){

player.Ui.Hint.Value = "ты получил беск патроны на пест"

player.inventory.SecondaryInfinity.Value = true;

player.Properties.Scores.Value -= 10000;

}else{

player.Ui.Hint.Value = "тебе надо  на беск патроны на пест 10000 а у тебя"+player.Properties.Scores.Value;

}

});



var fbTrigger = 

AreaPlayerTriggerService.Get("fbTrigger")

fbTrigger.Tags = ["fbTrigger"];

fbTrigger.Enable = true;

fbTrigger.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 14000){

player.Ui.Hint.Value = "ты получил беск патроны на автомат"

player.inventory.MainInfinity.Value = true;

player.Properties.Scores.Value -= 14000;

}else{

player.Ui.Hint.Value = "тебе надо на беск патроны на автомат 14000 а у тебя"+player.Properties.Scores.Value;

}

});



var exTrigger = 

AreaPlayerTriggerService.Get("exTrigger")

exTrigger.Tags = ["exTrigger"];

exTrigger.Enable = true;

exTrigger.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 17000){

player.Ui.Hint.Value = "ты получил грены"

player.inventory.Explosive.Value = true;

player.Properties.Scores.Value -= 17000;

}else{

player.Ui.Hint.Value = "тебе надо на грены 17000 а у тебя"+player.Properties.Scores.Value;

}

});



var ohTrigger = 

AreaPlayerTriggerService.Get("ohTrigger")

ohTrigger.Tags = ["ohTrigger"];

ohTrigger.Enable = true;

ohTrigger.OnEnter.Add(function(player){

player.Properties.Scores.Value += 100;

player.Ui.Hint.Value = "твой баланс"+player.Properties.Scores.Value;

});



var xpTrigger = 

AreaPlayerTriggerService.Get("xpTrigger")

xpTrigger.Tags = ["xpTrigger"];

xpTrigger.Enable = true;

xpTrigger.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 20000){

player.Ui.Hint.Value = "ты получил 200 xp"

player.contextedProperties.MaxHp.Value = 200

player.Properties.Scores.Value -= 20000;

}else{

player.Ui.Hint.Value = "тебе надо на 200 XP 20000 а у тебя"+player.Properties.Scores.Value;

}

});



var oTrigger = 

AreaPlayerTriggerService.Get("oTrigger")

oTrigger.Tags = ["oTrigger"];

oTrigger.Enable = true;

oTrigger.OnEnter.Add(function(player){

player.Properties.Scores.Value += 10000000;

player.Ui.Hint.Value = "твой баланс"+player.Properties.Scores.Value;

});





var abcTrigger = 

AreaPlayerTriggerService.Get("adc")

abcTrigger.Tags = ["adc"];

abcTrigger.Enable = true;

abcTrigger.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 600000){

player.Ui.Hint.Value = "ты получил полёт!!!"

player.Build.FlyEnable.Value = true;

player.Properties.Scores.Value -= 600000;

}else{

player.Ui.Hint.Value = "тебе надо на полет тебе надо 600000 а у тебя"+player.Properties.Scores.Value;

}

});



var p = 

AreaPlayerTriggerService.Get("p")

p.Tags = ["p"];

p.Enable = true;

p.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 50000){

player.Ui.Hint.Value = "ты получил 500 xp"

player.contextedProperties.MaxHp.Value = 500

player.Properties.Scores.Value -= 50000;

}else{

player.Ui.Hint.Value = "тебе надо на 500 XP 50000 а у тебя"+player.Properties.Scores.Value;

}

});



var abc = 

AreaPlayerTriggerService.Get("купить бл")

abc.Tags = ["купить бл"];

abc.Enable = true;

abc.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 100000){

player.Ui.Hint.Value = "ты получил блоки"

player.inventory.Build.Value = true;

player.Properties.Scores.Value -= 100000;

}else{

player.Ui.Hint.Value = "тебе надо на блоки 100000 а у тебя"+player.Properties.Scores.Value;

}

});



var xp = 

AreaPlayerTriggerService.Get("xp")

xp.Tags = ["xp"];

xp.Enable = true;

xp.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 70000){

player.Ui.Hint.Value = "ты получил 700 xp"

player.contextedProperties.MaxHp.Value = 500

player.Properties.Scores.Value -= 70000;

}else{

player.Ui.Hint.Value = "тебе надо на 700 XP 70000 а у тебя"+player.Properties.Scores.Value;

}



});



var xpt = 

AreaPlayerTriggerService.Get("xpt")

xpt.Tags = ["xpt"];

xpt.Enable = true;

xpt.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 90000){

player.Ui.Hint.Value = "ты получил 900 xp"

player.contextedProperties.MaxHp.Value = 500

player.Properties.Scores.Value -= 90000;

}else{

player.Ui.Hint.Value = "тебе надо на 900 XP 90000 а у тебя"+player.Properties.Scores.Value;

}



});



var зо = 

AreaPlayerTriggerService.Get("зо")

зо.Tags = ["зо"];

зо.Enable = true;

зо.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 1000){

player.Ui.Hint.Value = "Ты получил скин зомби"

player.contextedProperties.SkinType.Value = 1;

player.Properties.Scores.Value -= 1000;

}else{

player.Ui.Hint.Value = "тебе надо на скин зомби надо  1000 а у тебя"+player.Properties.Scores.Value;

}

});



var зе = 

AreaPlayerTriggerService.Get("зе")

зе.Tags = ["зе"];

зе.Enable = true;

зе.OnEnter.Add(function(player){

if(player.Properties.Scores.Value > 1000){

player.Ui.Hint.Value = "Ты получил скин зека"

player.contextedProperties.SkinType.Value = 2;

player.Properties.Scores.Value -= 1000;

}else{

player.Ui.Hint.Value = "тебе надо на скин зека надо  1000 а у тебя"+player.Properties.Scores.Value;

}

});



// счетчик спавнов

Spawns.OnSpawn.Add(function(player) {

	++player.Properties.Spawns.Value;

});

// счетчик смертей

Damage.OnDeath.Add(function(player) {

	++player.Properties.Deaths.Value;

});

// счетчик убийств

Damage.OnKill.Add(function(player, killed) {

	if (killed != null && killed != player) {

		++player.Properties.Kills.Value;

		player.Properties.Scores.Value += 35;

	}

});





Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.FloodFill.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.FillQuad.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.RemoveQuadValue.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"){player.Build.GenMapEnable.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"){player.Build.ChangeCameraPointsEnable.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.QuadChangeEnable.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.BuildModeEnable.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.QuadChangeEnable.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.RenameMapEnable.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.ChangeMapAuthorsEnable.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.LoadMapEnable.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"){player.inventory.Build.Pipette.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8")

{player.inventory.Build.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.GenMapEnable.Value = true;}});



Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);if (player.id == "E2DA02CA4DB293F8"||player.id == "8972D9E2F6573D5F"){player.Build.SetSkyEnable.Value = true;}});

