module.exports = async function (context, req) {
  const date = "2022-09-22T04:08:34.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

