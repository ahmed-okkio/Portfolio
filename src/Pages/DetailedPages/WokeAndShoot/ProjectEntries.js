// ProjectJson
let titleText = 'WOKEN'
var Desc = [`This is Woken, a prototype for a fast-paced multiplayer first-person shooter built on Unreal Engine. Woken is my first project in game development and primarily served as a sandbox for learning and exploration. It allowed me to engage with various aspects of game development like networking, player movement, map design, level building, animation programming, SFX, UI, and many others. Mainly, it allowed me to gain valuable fundamental programming experience in my development of the core gameplay mechanics.`,<br/>,< br/>,
`Woken was primarily developed in C++ with the combination of blueprints. Through this, I was able to get a firm understanding of development with C++ on Unreal without neglecting the power and efficiency of blueprints.`,<br/>,< br/>,
`The game has already met its initial project scope, but still receives intermittent patching. It now acts as a collaborative project between me and some friends.`]

let link2 = "https://github.com/ahmedhamad-okkio/WokeAndShoot"


let featureOneTitleText = 'Custom Movement'
let featureOneDescription = `Movement is one of the core gameplay mechanics of WOKEN. During ideation, I envisioned players duking it out in a battle of mechanics and slight of hand. I looked to take inspiration from existing movement systems such as the ones available in Titan Fall, CS:GO, VALORANT, Quake and other FPS titles. What all these titles had in common was that they shared some form of air strafing. Air strafing is the ability to change directions mid air using a combination of the strafe keys and mouse movements. The mechanic first appeared in games using the Quake engine where I got the basic implementation from. After recreating it in C++, I further changed it to suit my idea of how I wanted the movement to feel as well as feedback I received from friends who helped playtest.`
let FeatureOneLink = 'https://youtu.be/YrypIkx5yuM'

let language = 'cpp'
let featureOneSourceOneTitle = 'Air Strafing'
let f1s1_d1 = [`Firstly, I get the WishDir, which is a combination of the player's movement keys and mouse movements on the Yaw axis. 
This is then used to calculate the amount of speed to add called AddSpeed, which is kept above 0 and below the max acceleration. 
`,<br/>]


let f1s1_d2 = [`Usually, like in the orginal Quake engine, the final step would be to multiply the WishDir with AddSpeed and 
adding their sum to the velocity as the new Velocity. However, I was looking for more control over the characters movement in the air similar to VALORANT's movement.`,<br/>,<br/>,`
For this reason, I calculate the angle between the forward vector and the velocity. I use this angle to rotate the players velocity towards their cursor for a more responsive experience.
This resulted in too much control initially, so I associated the WishDir once again with this angle by creating a ModifiedAimAtAngle that Interpolates based on how large the WishDir is. 
`,<br/>,<br/>]

let f1s1_d3 = [`
Finally I tuned the additional speed received even more by exposing a variable called StrafeMultiplier to the editor.`,<br/>,` Proper movement prediction isn't yet implemented therefore for the time
being I disable movement error checks while the player is in the air.`,<br/>,<br/>,`Full function:`]
let f1s1_d4 = 'The movement is still a work in progress and the implementation above is subject to future change.'
let f1s1_1 = `
FVector NormalVelocity = Velocity.GetSafeNormal2D();
FVector InputAxis = FVector(MoveForwardAxis,MoveRightAxis,0);
FVector WishDir = InputAxis.RotateAngleAxis(CharacterRotation.Yaw,FVector (0,0,1));

float CurrentSpeed = FVector::DotProduct(Velocity,WishDir);
float MaxAccelDeltaTime = MaxAcceleration * deltaTime;
float AddSpeed = MaxWalkSpeed - CurrentSpeed;
AddSpeed = FMath::Max(FMath::Min(MaxAccelDeltaTime, AddSpeed),0.f);
`
let f1s1_2 = `
// Get the angle between your forward vector and your velocity.
float AimAtAngle = FMath::RadiansToDegrees(acosf(FVector::DotProduct(NormalVelocity, ForwardVector)));

// Prevent the player from beginning to air strafe while their mouse is too far away from their forward vector
if(AimAtAngle < 90)
{
    // Making the angle negative according to where the player is facing, making the range from 180 to -180.
    float PositiveOrNegative = FVector::DotProduct(FVector::CrossProduct(NormalVelocity, ForwardVector),FVector(0,0,1));
    AimAtAngle *= PositiveOrNegative;
    // 10.f  is a magic number and controls the feel of the airstrafe, change them if future tuning is needed.
    float ModifiedAimAtAngle = (AimAtAngle - ((FMath::Clamp(WishDir.Size2D()*StrafeMultiplier, 0.f, 1.f)))*PositiveOrNegative);
    float AmountToRotate = FMath::FInterpTo(ModifiedAimAtAngle, AimAtAngle, deltaTime, 10);`

let f1s1_3 = `
void UMyCharacterMovementComponent::AirAccel(const float MoveRightAxis, const float MoveForwardAxis, const FVector& ForwardVector, const FRotator& CharacterRotation, float deltaTime)
{
    if(MoveRightAxis)
    {
        FVector NormalVelocity = Velocity.GetSafeNormal2D();
        FVector InputAxis = FVector(MoveForwardAxis,MoveRightAxis,0);
        FVector WishDir = InputAxis.RotateAngleAxis(CharacterRotation.Yaw,FVector (0,0,1));

        float CurrentSpeed = FVector::DotProduct(Velocity,WishDir);
        float MaxAccelDeltaTime = MaxAcceleration * deltaTime;
        float AddSpeed = MaxWalkSpeed - CurrentSpeed;

        AddSpeed = FMath::Max(FMath::Min(MaxAccelDeltaTime, AddSpeed),0.f);

        // Get the angle between your forward vector and your velocity.
        float AimAtAngle = FMath::RadiansToDegrees(acosf(FVector::DotProduct(NormalVelocity, ForwardVector)));

        // Prevent the player from beginning to air strafe while their mouse is too far away from their forward vector
        if(AimAtAngle < 90)
        {
            // Making the angle negative according to where the player is facing, making the range from 180 to -180.
            float PositiveOrNegative = FVector::DotProduct(FVector::CrossProduct(NormalVelocity, ForwardVector),FVector(0,0,1));
            AimAtAngle *= PositiveOrNegative;
            // 10.f  is a magic number and controls the feel of the airstrafe, change them if future tuning is needed.
            float ModifiedAimAtAngle = (AimAtAngle - ((FMath::Clamp(WishDir.Size2D()*StrafeMultiplier, 0.f, 1.f)))*PositiveOrNegative);
            float AmountToRotate = FMath::FInterpTo(ModifiedAimAtAngle, AimAtAngle, deltaTime, 10);
            
            FVector NewVelocity = Velocity  + (WishDir * AddSpeed * StrafeMultiplier);
            // Releasing the breaking force while accelerating.
            BrakingFrictionFactor = 0.f;
            // Ignoring movement error checks temporary to reduce rubber banding until better prediction is implemented.
            bIgnoreClientMovementErrorChecksAndCorrection = true;
            Velocity = NewVelocity.RotateAngleAxis(AimAtAngle,FVector(0,0,1));
            UpdateMaxSpeed();

            const FVector Adjusted = Velocity*deltaTime*0.f;
            FHitResult Hit(1.f);
            FRotator NoPitchRotation = CharacterRotation;
            NoPitchRotation.Pitch = 0;
            SafeMoveUpdatedComponent(Adjusted.GetSafeNormal(), NoPitchRotation, true, Hit);
        }
    }
}
`
let featureOneSourceTwoTitle = 'Boost Pads'