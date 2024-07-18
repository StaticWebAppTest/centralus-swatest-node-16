module.exports = async function (context, req) {
  const date = "2024-07-18T15:11:51.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

