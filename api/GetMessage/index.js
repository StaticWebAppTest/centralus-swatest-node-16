module.exports = async function (context, req) {
  const date = "2022-09-22T20:13:24.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

