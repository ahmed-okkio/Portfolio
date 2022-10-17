import React, { useState, useEffect } from 'react';
import classes from '../ProjectDetailsComponents/ProjectDetails.module.css'
import {ProjectIntro} from '../../MainPage/Main-SubPages/IntroPage/IntroPage'
import TitleComponent from '../ProjectDetailsComponents/TitleComponent';
import FeatureComponent from '../ProjectDetailsComponents/FeatureComponent';
import SourceCodeComponent from '../ProjectDetailsComponents/SourceCodeComponent';
import CustomCollapsible from '../ProjectDetailsComponents/CustomCollapsible'
import Footer from '../../MainPage/Main-SubPages/FinalPage/Footer'
import NewPad from '../../../Assets/NewPadMesh.jpeg'
import OldPad from '../../../Assets/OldPadMesh.gif'
import PadRange from '../../../Assets/BoostPadRange.jpeg'
import axios from 'axios';


const WokeAndShoot=(props)=>{
    const [loadStyle,setLoadStyle] = useState({opacity:0,transform: `translateY(${50}px)`});
    const [downloadInfo,setDownloadInfo] = useState({url:'#',size:0,version:'UNAVAILABLE'});
    const LoadComponent = () =>{
        if(loadStyle.opacity == 1)
        {
            return;
        }

        let node = document.getElementById("FeaturesHeader")
        if ( typeof  node != 'undefined')
        {
            
            if (props.scrollOffset >= (node.offsetTop - 700) && loadStyle.opacity == 0)
            {
                setLoadStyle({opacity:1})
            }
        }
    }
    useEffect(()=>{
       LoadComponent();
    },[props.scrollOffset])

    useEffect(()=>{
        axios.get('https://api.github.com/repos/ahmedhamad-okkio/wokeandshoot/releases/latest')
        .then(res => {
            let downloadinfo = res.data.assets[0]
            setDownloadInfo({
                url:downloadinfo.browser_download_url,
                size:Math.round((downloadinfo.size/1048576)),
                version:res.data.tag_name
            });
        })
        .catch(function (error) {
            console.log(error);
        })
     },[])
    // ProjectJson
    let titleText = 'WOKEN'
    let Desc = [`This is Woken, a prototype for a fast-paced multiplayer first-person shooter built on Unreal Engine. Woken is my first project in game development and primarily served as a sandbox for learning and exploration. It allowed me to engage with various aspects of game development like networking, player movement, map design, level building, animation programming, SFX, UI, and many others. Mainly, it allowed me to gain valuable fundamental programming experience in my development of the core gameplay mechanics.`,<br/>,< br/>,
    `Woken was primarily developed in C++ with the combination of blueprints. Through this, I was able to get a firm understanding of development with C++ on Unreal without neglecting the power and efficiency of blueprints.`,<br/>,< br/>,
    `The game has already met its initial project scope, but still receives intermittent patching. It now acts as a collaborative project between me and some friends.`]
    
    let link2 = "https://github.com/ahmedhamad-okkio/WokeAndShoot"


    let featureOneTitleText = 'Custom Movement'
    let featureOneDescription = [`Movement is one of the core gameplay mechanics of WOKEN. During ideation,
    I envisioned players duking it out in a battle of mechanics and slight of hand. I looked to take inspiration
    from existing movement systems such as the ones available in Titan Fall, CS:GO, VALORANT, Quake and other FPS
    titles. What all these titles had in common was that they shared some form of air strafing.`,<br/>,<br/>,
    `To expand on the player's manueverability, I looked at examples of fun movement mechanics in popular online games.
    Initial inspirations included Quake's rocket jumps and Titan Fall's grapple but I wanted the movement mechanics to
    integrate well together so I ended up with the Idea of boost pads.`]
    let FeatureOneLink = 'https://youtu.be/YrypIkx5yuM'

    let language = 'cpp'
    let featureOneSourceOneTitle = 'Air Strafing'
    let f1s1_d1 = [`Air strafing is the ability to change directions mid air using a combination of the strafe keys and mouse movements. The mechanic first appeared in games using the Quake engine where I got the basic implementation from. After recreating it in C++, I further changed it to suit my idea of how I wanted the movement to feel as well as feedback I received from friends who helped playtest. `,<br/>,<br/>,`Firstly, I get the WishDir, which is a combination of the player's movement keys and mouse movements on the Yaw axis. 
    This is then used to calculate the amount of speed to add called AddSpeed, which is kept above 0 and below the max acceleration. 
    `,<br/>]
    let f1s1_d2 = [<br/>,`Usually, like in the orginal Quake engine, the final step would be to multiply the WishDir with AddSpeed and 
    adding their sum to the velocity as the new Velocity. However, I was looking for more control over the characters movement in the air similar to VALORANT's movement.`,<br/>,<br/>,`
    For this reason, I calculate the angle between the forward vector and the velocity. I use this angle to rotate the players velocity towards their cursor for a more responsive experience.
    This resulted in too much control initially, so I associated the WishDir once again with this angle by creating a ModifiedAimAtAngle that Interpolates based on how large the WishDir is. 
    `,<br/>]
    let f1s1_d3 = [<br/>,`
    Finally I tuned the additional speed received even more by exposing a variable called StrafeMultiplier to the editor.`,<br/>,` Proper movement prediction isn't yet implemented therefore for the time
    being I disable movement error checks while the player is in the air.`,<br/>,<br/>,`The movement is still a work in progress and the implementation above is subject to future change.`]
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
    // Get the angle between the players forward vector and their velocity.
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

            // Get the angle between the players forward vector and their velocity.
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
    let f1s2_d1 = [<br/>,`Boost pads, as the name emplies, will boost you away from them if you are close enough.
    They allow for players to suddenly increase their speed and/or change their direction of movement very quickly. The main 
    inspiration came from the Satcher ability on a VALORANT Agent called Raze. The ability to increase your speed very quickly and
    change your direction can be further combined with Air Strafing for a more dynamic movement system.
    `,<br/>,<br/>,` The boost pads work in a prime-detonate manner where the pad can be primed by shooting it. The boost pad will stay 
    primed for a set amount of time and can be detonated any time while it's primed by pressing the detonation keybind. The pad changes
    color based on its state (ready, primed, on cooldown)`,<br/>]

    let f1s2_1 = `
    bool ABoostPad::ClientPrimePad(AWokeAndShootCharacter* Initiator) 
    {
        // Check if initiatior is on cooldown or if the pad is already primed
        if(!CooldownList.Contains(Initiator) && !bIsPrimed)
        {	
            bIsPrimed = true;
            // Changing the color of the pad as primed.
            PadMesh->SetMaterial(0,PrimedMaterial);
            GetWorld()->GetTimerManager().SetTimer(TH_PadTimeOutTimer,this,&ABoostPad::ClientResetPad,BoostPadCooldown);
            return true;	
        }
    
        return false;
    }
    `
    let f1s2_d2 = [<br/>,`The pad changes colors simply by changing between 3 materials with different colors.`,<br/>,`The detonation process
    undergoes a few checks before the detonating player is blasted away. Firstly after checking for cooldowns and the "prime-status", the pad
    will initiate the cooldown using InitiateCooldown().`]

    let f1s2_2 = `
    void ABoostPad::DetonatePad(AWokeAndShootCharacter* Initiator) 
    {
        // Make sure player is not on cool down and the pad is primed.
        if(CooldownList.Contains(Initiator) || !bIsPrimed){return;}

        // Add Cooldown
        InitiateCooldown(Initiator);

        if(Initiator->IsLocallyControlled())
        {
            PadMesh->SetMaterial(0,DetonatedMaterial);
            GetWorld()->GetTimerManager().ClearTimer(TH_PadTimeOutTimer);
        }
        // More from DetonatePad() is not shown here
    //----------------------------------------------------------------
    void ABoostPad::InitiateCooldown(AWokeAndShootCharacter* Initiator) 
    {
        FTimerHandle TH_CooldownTimer;
        CooldownList.AddUnique(Initiator);

        GetWorld()->GetTimerManager().SetTimer(TH_CooldownTimer,this,&ABoostPad::RemoveActorCD,BoostPadCooldown);	
    }
    `
    let f1s2_d3 = [<br/>,`The next step involves shooting line traces in a sphere from the center of the boost pad with
    a range set by BoostPadRange. The line traces will ignore the pad(this) and will only collide with players
    (sepcified within the ECC Trace channel 13).`]

    let f1s2_3 = `
        // Continuation of DetonatePad() 
	TArray<FHitResult> HitResults;
	FVector SweepStart = GetActorLocation();
	FVector SweepEnd = GetActorLocation();

	FCollisionShape MyColSphere = FCollisionShape::MakeSphere(BoostPadRange);
	FCollisionQueryParams QueryParams;
	QueryParams.AddIgnoredActor(this);

    bool isHit = GetWorld()->SweepMultiByChannel(HitResults, SweepStart, SweepEnd, FQuat::Identity, ECC_GameTraceChannel3, MyColSphere, QueryParams);
    // More from DetonatePad() is not shown here
    //----------------------------------------------------------------
    `
    let f1s2_d4 = [<br/>,`For each hit (only players can be hit), the hit actors are checked to make sure they are valid players via casting.
    Once a reference to the player character is found valid, it under goes the final check of WithinConeRange(). 
    This function checks for the angle between the forward vector of the pad and the direction vector from the pad towards the hit player. 
    If the angle is larger than MaximumConeAngle, then the boost will be aborted. This will constrict the boost pad to boosting only within 
    a cone of defined by MaximumConeAngle. That way players behind pad will not be affected as well as helping match the future animation's
    hit box.`]
    let f1s2_4 = `
    // Continuation of DetonatePad() 
    if (isHit)
    {
        for(FHitResult HitResult : HitResults)
        {
            AWokeAndShootCharacter* HitActor = Cast<AWokeAndShootCharacter>(HitResult.GetActor());
            if (HitActor != nullptr)
            {
                FVector ActorLocation = HitActor->GetActorLocation();
                if(!WithinConeRange(SweepStart, ActorLocation)){continue;}

                if(HitActor != Initiator)
                {
                    continue;
                }

                FVector ImpulseDirection = GetImpulseDirection(ActorLocation);
                // Apply Impulse
                HitActor->DirectionalImpulse(ImpulseDirection);

    // More from DetonatePad() is not shown here
    //----------------------------------------------------------------
    bool ABoostPad::WithinConeRange(FVector& PadLocation, FVector& HitActorLocation) 
    {
        // Calculate cone range
        FVector FrontFacingVector = PadLocation + GetActorRotation().RotateVector(FVector(0,100,0));
        FVector ForwardFacingDirection = FrontFacingVector - PadLocation;
        ForwardFacingDirection.Normalize();
        FVector TargetFacingDirection = HitActorLocation - PadLocation;
        TargetFacingDirection.Normalize();
    
        // Check if Actor is within cone
        float AngleToFront = FMath::RadiansToDegrees(acosf(FVector::DotProduct(ForwardFacingDirection, TargetFacingDirection)));
        if(AngleToFront > MaximumConeAngle) {return false;}
        else {return true;}
    }
    `
    let f1s2_5 = `
    void AWokeAndShootCharacter::DirectionalImpulse(FVector ImpulseDirection) 
    {
        // Temporarily disables movement error correction until prediction is implemented (enabled when on landing).
        CharacterMovement->bIgnoreClientMovementErrorChecksAndCorrection = true;
        CharacterMovement->Launch(ImpulseDirection);

        // RPC
        if(!HasAuthority())
        {
            Server_RelayBoost(ImpulseDirection);
        }
    }

    FVector ABoostPad::GetImpulseDirection(FVector& ActorLocation) 
    {
        // Calculate Impulse direction+amount
        FVector ImpulseDirection = (ActorLocation + HeightOffset ) - GetActorLocation();
        ImpulseDirection.Normalize();
        ImpulseDirection*= BoostAmount;
            
        return ImpulseDirection;
    }
    `
    let f1s2_6 = `
    void ABoostPad::DetonatePad(AWokeAndShootCharacter* Initiator) 
    {
        // Make sure player is not on cool down and the pad is primed.
        if(CooldownList.Contains(Initiator) || !bIsPrimed){return;}

        // Add Cooldown
        InitiateCooldown(Initiator);

        if(Initiator->IsLocallyControlled())
        {
            PadMesh->SetMaterial(0,DetonatedMaterial);
            GetWorld()->GetTimerManager().ClearTimer(TH_PadTimeOutTimer);
        }

        TArray<FHitResult> HitResults;
        FVector SweepStart = GetActorLocation();
        FVector SweepEnd = GetActorLocation();

        FCollisionShape MyColSphere = FCollisionShape::MakeSphere(BoostPadRange);
        FCollisionQueryParams QueryParams;
        QueryParams.AddIgnoredActor(this);

        bool isHit = GetWorld()->SweepMultiByChannel(HitResults, SweepStart, SweepEnd, FQuat::Identity, ECC_GameTraceChannel3, MyColSphere, QueryParams);
        if (isHit)
        {
            for(FHitResult HitResult : HitResults)
            {
                AWokeAndShootCharacter* HitActor = Cast<AWokeAndShootCharacter>(HitResult.GetActor());
                if (HitActor != nullptr)
                {
                    FVector ActorLocation = HitActor->GetActorLocation();
                    if(!WithinConeRange(SweepStart, ActorLocation)){continue;}

                    if(HitActor != Initiator)
                    {
                        continue;
                    }

                    FVector ImpulseDirection = GetImpulseDirection(ActorLocation);
                    // Apply Impulse
                    HitActor->DirectionalImpulse(ImpulseDirection);
                }
            }
        }
    }
    `
    return(
        <>
        <ProjectIntro ProjectName = {titleText}/>
        <TitleComponent titleTextProp = {titleText} Description = {Desc} scrollOffset={props.scrollOffset} />
        <div id="FeaturesHeader" className={classes.Container2} style={loadStyle}>
            <div className={classes.ProjectTitle} style={{paddingBottom:0}}> HIGHLIGHT FEATURES</div>
            <div className={classes.FeatureContainer}>
                <FeatureComponent featureTitleText = {featureOneTitleText} featureDescription = {featureOneDescription} featureLink = {FeatureOneLink} isOpen={true}>
                <div className={classes.SourceContainer}>
                    <CustomCollapsible title = {featureOneSourceOneTitle}>
                        <div className={classes.SourceDescription}>{f1s1_d1}</div>
                        <SourceCodeComponent sourceCode = {f1s1_1} language = {language}/>
                        <div className={classes.SourceDescription}>{f1s1_d2}</div>
                        <SourceCodeComponent sourceCode = {f1s1_2} language = {language}/>    
                        <div className={classes.SourceDescription}>{f1s1_d3}</div>
                        {/* <SourceCodeComponent sourceCode = {f1s1_3} language = {language}/>   */}
                        <div className={classes.SourceDescription}>
                            <CustomCollapsible title = 'AirAccel()'>
                                    <SourceCodeComponent   sourceCode = {f1s1_3} language = {language}/>
                            </CustomCollapsible>  
                        </div>
                    </CustomCollapsible>
                    <CustomCollapsible title = {featureOneSourceTwoTitle} >
                        <div className={classes.SourceDescription}>{f1s2_d1}</div>
                        <SourceCodeComponent   sourceCode = {f1s2_1} language = {language}/>    
                        <div className={classes.SourceDescription} style={{marginBottom:`0px`}}>Temporary pad mesh color changing:</div>
                        <div className={classes.SourceDescription}>
                            <img src={OldPad}/>
                        </div>
                        <div className={classes.SourceDescription} style={{marginBottom:`0px`}}>New pad mesh compatible with the same color changing mechanism:</div>
                        <div className={classes.SourceDescription}>
                            <img src={NewPad} ></img>
                        </div>
                        <div className={classes.SourceDescription}>{f1s2_d2}</div>
                        <SourceCodeComponent   sourceCode = {f1s2_2} language = {language}/>   
                        <div className={classes.SourceDescription}>{f1s2_d3}</div>
                        <SourceCodeComponent   sourceCode = {f1s2_3} language = {language}/>
                        <div className={classes.SourceDescription}>
                            <img src={PadRange} ></img>
                        </div>
                        <div className={classes.SourceDescription}>{f1s2_d4}</div>
                        <SourceCodeComponent   sourceCode = {f1s2_4} language = {language}/>
                        <div className={classes.SourceDescription}>{f1s2_d4}</div>
                        <SourceCodeComponent   sourceCode = {f1s2_5} language = {language}/>
                        <div className={classes.SourceDescription}>
                            <CustomCollapsible title = 'DetonatePad()'>
                                <SourceCodeComponent   sourceCode = {f1s2_6} language = {language}/>
                            </CustomCollapsible>
                        </div>
                    </CustomCollapsible>
                </div>
                
                </FeatureComponent>
            </div>
            <div className={classes.ProjectDescription} style={{maxWidth:'720px', textAlign:'center'}}> This dev blog is actively being built and updated, more features are yet to be added. <br/><br/>My github has the most up to date 
            version of WOKEN feel free to check it out.</div>
            <div className={classes.finalLinks}>
                <a href={downloadInfo.url} rel="noopener noreferrer" className={classes.FinalLinksSubContainer}>
                    <span>
                        DOWNLOAD WOKEN
                    </span>
                    <div style={{display:'flex'}}>
                        <div className={classes.versionText}>{downloadInfo.version}</div>
                        <div className={classes.versionText}>{downloadInfo.size}MB</div>
                    </div>
                </a>
                <a href="https://github.com/ahmedhamad-okkio/WokeAndShoot" target="_blank" rel="noopener noreferrer" className={classes.FinalLinksSubContainer}>
                    <span>
                        GITHUB REPOSITORY
                    </span>
                </a>
            </div>
            
            <br/><br/><br/>
            <div className={classes.ProjectDescription} style={{opacity:0.7, fontSize:'10px', textAlign:'center'}}>This project is explicitly for educational purposes</div>
        </div>
        <Footer></Footer>
        </>
    )

}
export default WokeAndShoot;