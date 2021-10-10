var TestRageFace = artifacts.require("./TestRageFace.sol");

module.exports = async function(deployer, network, accounts) {
  const [admin, _] = accounts;

  await deployer.deploy(TestRageFace, "Rage Face", "RF", "https://rageface.com/", "1633137803");
};
