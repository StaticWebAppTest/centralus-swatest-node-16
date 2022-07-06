module.exports = async function (context, req) {
  const date = "2022-07-06T04:41:04.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

