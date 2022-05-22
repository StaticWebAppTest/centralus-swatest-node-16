module.exports = async function (context, req) {
  const date = "2022-05-22T19:08:55.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

