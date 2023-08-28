module.exports = async function (context, req) {
  const date = "2023-08-28T03:09:12.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

