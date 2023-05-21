module.exports = async function (context, req) {
  const date = "2023-05-21T11:06:43.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

