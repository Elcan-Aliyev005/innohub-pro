import SurveyForm from '@/components/ui/form/survey.form'
import React from 'react'

function SurveySection() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Tez-tez Verilən Suallar</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Ən çox soruşulan suallara cavablar tapın
                    </p>
                </div>
                <SurveyForm />
            </div>
        </section>
    )
}

export default SurveySection