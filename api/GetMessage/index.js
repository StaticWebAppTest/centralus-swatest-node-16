module.exports = async function (context, req) {
  const date = "2024-01-12T13:11:50.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

