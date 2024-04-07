module.exports = async function (context, req) {
  const date = "2024-04-07T03:10:22.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

