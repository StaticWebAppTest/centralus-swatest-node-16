module.exports = async function (context, req) {
  const date = "2022-04-22T06:14:05.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

