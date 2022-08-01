module.exports = async function (context, req) {
  const date = "2022-08-01T19:08:16.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

