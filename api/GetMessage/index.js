module.exports = async function (context, req) {
  const date = "2022-08-03T22:10:33.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

