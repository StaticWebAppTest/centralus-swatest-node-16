module.exports = async function (context, req) {
  const date = "2022-08-02T19:08:47.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

