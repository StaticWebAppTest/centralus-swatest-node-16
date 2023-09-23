module.exports = async function (context, req) {
  const date = "2023-09-23T22:07:19.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

