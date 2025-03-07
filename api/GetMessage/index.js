module.exports = async function (context, req) {
  const date = "2025-03-07T23:09:30.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

