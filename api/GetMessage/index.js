module.exports = async function (context, req) {
  const date = "2022-10-24T21:13:15.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

