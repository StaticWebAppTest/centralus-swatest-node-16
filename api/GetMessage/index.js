module.exports = async function (context, req) {
  const date = "2022-07-03T03:26:21.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

