module.exports = async function (context, req) {
  const date = "2022-03-03T02:09:09.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

