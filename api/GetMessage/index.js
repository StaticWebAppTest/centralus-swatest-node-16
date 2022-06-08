module.exports = async function (context, req) {
  const date = "2022-06-08T03:51:45.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

