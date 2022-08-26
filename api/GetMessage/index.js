module.exports = async function (context, req) {
  const date = "2022-08-26T04:12:00.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

