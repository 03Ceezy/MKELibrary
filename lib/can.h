/*
 * can.h
 *
 *  Created on: Oct 24, 2018
 *      Author: oneso
 */

#ifndef CAN_H_
#define CAN_H_

#include "Service.h"

namespace BSP {

class can final : public StaticService<can, const can_config*> {
public:

	struct can_config {
		// input parameters
		// flags for can0 and can1 base
		// baudrate
		//
	};

	struct mb_config {

	};

	struct mb_frame {
		uint8_t data[8];
	};

	void tick() override {}
	void init() override {}

	can(const can_config*);

	/*
	 * configure mb with rx or tx settings
	 */
	uint8_t setMBConfig(const mb_config*);

	/*
	 * tx using selected mb
	 */
	bool txMSG(const mb_frame*);

	/*
	 * rx using selected mb
	 */
	bool rxMSG(const mb_frame*);

private:

};


#endif /* CAN_H_ */