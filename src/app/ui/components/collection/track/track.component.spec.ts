import { IMock, Mock } from 'typemoq';
import { SettingsBase } from '../../../common/settings/settings.base';
import { BaseAppearanceService } from '../../../services/appearance/base-appearance.service';
import { TrackComponent } from './track.component';

describe('TrackComponent', () => {
    let appearanceServiceMock: IMock<BaseAppearanceService>;
    let settingsMock: IMock<SettingsBase>;
    let component: TrackComponent;

    beforeEach(() => {
        appearanceServiceMock = Mock.ofType<BaseAppearanceService>();
        settingsMock = Mock.ofType<SettingsBase>();

        component = new TrackComponent(appearanceServiceMock.object, settingsMock.object);
    });

    describe('constructor', () => {
        it('should create', () => {
            // Arrange

            // Act

            // Assert
            expect(component).toBeDefined();
        });

        it('should declare but not define Track', () => {
            // Arrange

            // Act

            // Assert
            expect(component.track).toBeUndefined();
        });

        it('should define canShowHeader as false', () => {
            // Arrange

            // Act

            // Assert
            expect(component.canShowHeader).toBeFalsy();
        });

        it('should define appearanceService', () => {
            // Arrange

            // Act

            // Assert
            expect(component.appearanceService).toBeDefined();
        });

        it('should define settings', () => {
            // Arrange

            // Act

            // Assert
            expect(component.settings).toBeDefined();
        });
    });
});
