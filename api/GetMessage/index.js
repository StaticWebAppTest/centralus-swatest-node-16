module.exports = async function (context, req) {
  const date = "2022-06-07T22:09:36.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

