module.exports = async function (context, req) {
  const date = "2022-06-03T19:08:20.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

