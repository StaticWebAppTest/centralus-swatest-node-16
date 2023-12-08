module.exports = async function (context, req) {
  const date = "2023-12-08T03:09:51.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

