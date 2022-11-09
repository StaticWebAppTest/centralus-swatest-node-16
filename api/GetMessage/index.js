module.exports = async function (context, req) {
  const date = "2022-11-09T03:26:36.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

