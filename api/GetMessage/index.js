module.exports = async function (context, req) {
  const date = "2022-07-22T12:21:11.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

