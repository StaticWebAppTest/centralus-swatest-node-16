module.exports = async function (context, req) {
  const date = "2023-05-24T14:08:32.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

