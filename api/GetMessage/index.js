module.exports = async function (context, req) {
  const date = "2025-05-31T21:11:29.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

