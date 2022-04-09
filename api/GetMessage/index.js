module.exports = async function (context, req) {
  const date = "2022-04-09T03:19:29.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

