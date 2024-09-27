module.exports = async function (context, req) {
  const date = "2024-09-27T05:11:44.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

