module.exports = async function (context, req) {
  const date = "2022-12-04T05:08:53.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

