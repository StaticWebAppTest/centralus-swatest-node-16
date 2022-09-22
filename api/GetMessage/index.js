module.exports = async function (context, req) {
  const date = "2022-09-22T23:13:35.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

