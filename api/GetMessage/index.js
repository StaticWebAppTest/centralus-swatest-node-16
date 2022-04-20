module.exports = async function (context, req) {
  const date = "2022-04-20T10:11:48.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

