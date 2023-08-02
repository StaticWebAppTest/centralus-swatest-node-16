module.exports = async function (context, req) {
  const date = "2023-08-02T16:11:20.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

