/*
* 作者：李健
* 邮箱：lj2690@163.com
* */
import {ApplicantModel} from "../model/applicant-model.ts";
import {reactive} from "vue";

class ApplicantViewModel {
    
    data: ApplicantVMData = reactive({
        info: null,
        isLoading: false,
        error: '',
    });

    async loadInfo(fileName: string = 'ljq') {
        this.data.isLoading = true;
        this.data.error = '';
        try {
            this.data.info = await ApplicantModel.loadApplicantModel(fileName);
        } catch (err) {
            this.data.error = err instanceof Error ? err.message : "加载失败";
            this.data.info = null;
        } finally {
            this.data.isLoading = false;
        }
    }
}

interface ApplicantVMData {
    info: ApplicantModel | null;
    isLoading: boolean;
    error: string;
}

export {ApplicantViewModel};

export type {
    ApplicantVMData
}
