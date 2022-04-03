module.exports = async function (context, req) {
  const date = "2022-04-03T03:21:21.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

