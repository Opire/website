import { Button, Flex, Group } from "@mantine/core";
import classes from "./component.module.css";
import { UserCommentCard } from "../../components/UserCommentCard/index";

export default function HomeSection() {
  return (
    <section className={classes.homeSection}>
      <svg
        className={classes.homeLogo}
        width="639"
        height="695"
        viewBox="0 0 639 695"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1_209"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="28"
          y="12"
          width="659"
          height="656"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M618.008 126.276C634.986 204.403 585.415 281.5 507.288 298.479C429.162 315.457 352.064 265.886 335.086 187.759C318.107 109.632 367.678 32.5341 445.805 15.556C523.932 -1.42214 601.03 48.1488 618.008 126.276ZM203.896 364.41C282.023 347.432 331.594 270.334 314.616 192.207C297.638 114.08 220.54 64.5094 142.413 81.4875C64.2861 98.4656 14.7151 175.563 31.6932 253.69C48.6713 331.817 125.769 381.388 203.896 364.41ZM269.034 664.147C347.161 647.169 396.732 570.071 379.754 491.944C362.775 413.817 285.678 364.247 207.551 381.225C129.424 398.203 79.8527 475.301 96.8308 553.428C113.809 631.554 190.907 681.125 269.034 664.147ZM572.426 598.216C650.553 581.238 700.124 504.14 683.146 426.013C666.168 347.886 589.07 298.315 510.943 315.293C432.816 332.271 383.245 409.369 400.223 487.496C417.201 565.623 494.299 615.194 572.426 598.216Z"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_1_209)">
          <g opacity="0.5">
            <ellipse
              cx="173.137"
              cy="219.445"
              rx="145.199"
              ry="148.714"
              transform="rotate(-12.2621 173.137 219.445)"
              fill="url(#paint0_linear_1_209)"
              fill-opacity="0.65"
            />
            <ellipse
              cx="239.033"
              cy="527.584"
              rx="144.149"
              ry="148.714"
              transform="rotate(-12.2621 239.033 527.584)"
              fill="url(#paint1_linear_1_209)"
              fill-opacity="0.65"
            />
            <ellipse
              cx="474.214"
              cy="154.008"
              rx="144.149"
              ry="148.714"
              transform="rotate(-12.2621 474.214 154.008)"
              fill="url(#paint2_linear_1_209)"
              fill-opacity="0.65"
            />
            <ellipse
              cx="541.663"
              cy="460.722"
              rx="144.919"
              ry="149.777"
              transform="rotate(-12.2621 541.663 460.722)"
              fill="url(#paint3_linear_1_209)"
              fill-opacity="0.65"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_209"
            x1="245.326"
            y1="369.701"
            x2="141.737"
            y2="122.699"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.048074" stop-color="#1E9387" />
            <stop offset="1" stop-color="#092D29" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_209"
            x1="318.901"
            y1="401.914"
            x2="149.461"
            y2="644.692"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E9387" />
            <stop offset="1" stop-color="#092D29" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_209"
            x1="349.585"
            y1="233.938"
            x2="607.974"
            y2="101.291"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E9387" />
            <stop offset="1" stop-color="#092D29" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_209"
            x1="473.987"
            y1="329.936"
            x2="598.866"
            y2="601.388"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E9387" />
            <stop offset="1" stop-color="#092D29" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <Flex className={classes.homeTitleAndButtonsFlex}>
        <Group className={classes.homeTitlesGroup}>
          <h2 className={classes.firstTitle}>FUEL THE</h2>
          <h1 className={classes.secondTitle}>OPEN SOURCE</h1>
          <h2 className={classes.thirdTitle}>REVOLUTION</h2>
          <p className={classes.descTitle}>
            ANYONE CAN CREATE bounties IN OPEN-SOURCE PROJECTS AND ATTRACT
            COLLABORATORS, WHILE DEVELOPERS CAN EARN MONEY BY SOLVING ISSUES
          </p>
        </Group>

        <Flex gap={24} className={classes.homeFrameButtons}>
          <Button
            variant="filled"
            radius="xl"
            color="#1E9387"
            p={"20px 34px 20px 34px"}
            h={64}
            w={293}
          >
            GET STARTED NOW
          </Button>

          <Button
            className={classes.homeWatchVideoButton}
            variant="outline"
            radius="xl"
            color="#fff"
            p={"20px 34px 20px 34px"}
            h={64}
            w={293}
            bg={"#1A1A1A"}
            leftSection={
              <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33193 0.532132L10.0886 5.64047C10.1514 5.6772 10.2034 5.72972 10.2396 5.7928C10.2757 5.85588 10.2948 5.92733 10.2948 6.00005C10.2948 6.07276 10.2757 6.14421 10.2396 6.20729C10.2034 6.27038 10.1514 6.3229 10.0886 6.35963L1.33193 11.468C1.26849 11.505 1.19638 11.5246 1.12293 11.5248C1.04947 11.5249 0.977276 11.5057 0.913655 11.469C0.850034 11.4323 0.797251 11.3794 0.760654 11.3157C0.724058 11.252 0.704949 11.1798 0.705265 11.1063V0.892132C0.705243 0.818818 0.724566 0.746796 0.761283 0.683338C0.797999 0.619881 0.850809 0.567234 0.91438 0.530715C0.977951 0.494195 1.05003 0.475095 1.12335 0.475344C1.19666 0.475593 1.26861 0.495182 1.33193 0.532132Z"
                  fill="#92BEBA"
                />
              </svg>
            }
          >
            WATCH A VIDEO
          </Button>
        </Flex>
      </Flex>

      <Group className={classes.homeUserCommentsGroup}>
        <UserCommentCard
          comment="Sed ut perspiciatis unde omnis iste natus error sit voluptatem a sunt explicabo."
          name="Dummy tooltips here"
        />
        <UserCommentCard
          comment="Totam rem aperiam, eaque ipsa quae ."
          name="Sit amet lorium"
          position={{ x: -50, y: 0 }}
        />
        <UserCommentCard
          comment="Atae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas."
          name="Sed ut perspiciatis unde."
        />
      </Group>
    </section>
  );
}
