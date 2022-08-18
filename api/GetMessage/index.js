module.exports = async function (context, req) {
  const date = "2022-08-18T04:57:05.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

