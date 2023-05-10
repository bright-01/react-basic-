
// 첫번재 인자는 객체의 초기값
// 두번째 인자는 액션 타입과 파라미터
export default function PersonReducer (payload, action) {

    switch (action.type) {
        case 'updated' : {
            const { prev,current } = action;
            return {
                ...payload, mentors: {...payload.mentors.map((mentor) => {
                        if(mentor.name === prev) {
                            return mentor.name = current;
                        }
                        return mentor;
                    })}
            }
        }
        case 'added' : {
            const { name, title } = action;
            return {

                    ...payload, mentors: [...payload.mentors, {name, title}]

            }
        }

        case 'deleted' : {
            const { name } = action;
            return {
                ...payload, mentors: payload.mentors.filter( (mentor) => mentor.name != name)
            }
        }

        default : {
            throw Error(`알수없는 타입 : ${action.type}`)
        }
    }

}