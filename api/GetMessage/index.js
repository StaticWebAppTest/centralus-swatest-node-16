module.exports = async function (context, req) {
  const date = "2025-05-31T11:09:56.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

