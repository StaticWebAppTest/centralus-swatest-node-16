module.exports = async function (context, req) {
  const date = "2024-01-10T06:12:44.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

