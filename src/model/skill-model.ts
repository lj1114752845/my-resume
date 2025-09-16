/**
 * 技能
 */
class SkillModel {
    name: string;
    level: string;
    often: number;


    constructor(name: string, level: string, often: number) {
        this.name = name;
        this.level = level;
        this.often = often;
    }

    static toModel(obj: Record<string, any>): SkillModel {
        return new SkillModel(
            obj.name ?? '',
            obj.level ?? '',
            obj.often ?? 0
        );
    };
}

export {
    SkillModel
}