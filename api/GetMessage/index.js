module.exports = async function (context, req) {
  const date = "2022-06-17T02:59:35.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

