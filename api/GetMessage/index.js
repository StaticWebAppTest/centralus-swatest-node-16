module.exports = async function (context, req) {
  const date = "2023-11-12T23:08:11.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

