module.exports = async function (context, req) {
  const date = "2024-09-14T21:09:30.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

