module.exports = async function (context, req) {
  const date = "2022-11-02T12:26:41.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

