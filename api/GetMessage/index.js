module.exports = async function (context, req) {
  const date = "2022-08-02T22:11:04.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

