import React from 'react';
import Container from '../../components/shared/Container';
import Title from '../../components/Title';

const Instructors = () => {
    return (
        <section className="p-20 min-h-screen">
            <Container>
                {/* Page Title */}
                <Title title="Instructors" />
            </Container>
        </section>
    );
};

export default Instructors;