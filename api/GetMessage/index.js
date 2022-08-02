module.exports = async function (context, req) {
  const date = "2022-08-02T03:58:58.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

