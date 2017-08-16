pragma solidity ^0.4.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adoption.sol";

contract TestAdoption {
    Adoption adoption = Adoption(DeployedAddresses.Adoption());

    function testUserCanAdoptPet() {
        uint returnedId = adoption.adopt(8);
        uint expected = 8;

        Assert.equal(returnedId, expected, "Adoption of pet should be recoreded. Pet id: 8 ");
    }

    function testGetAdopterAddressByPetId() {
        address expected = this;

        address adopter = adoption.adopters(8);

        Assert.equal(adopter, expected, "Owner should be recored. Pet id: 8");
    }

    function testGetAdoptersAddressByPetIdInArray() {
        address expected = this;

        address[16] memory adopters = adoption.getAdopters();
        
        Assert.equal(adopters[8], expected, "Owner of pet recovered. Pet Id: 8");
    }
}