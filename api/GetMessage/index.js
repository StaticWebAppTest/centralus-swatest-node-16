module.exports = async function (context, req) {
  const date = "2024-05-01T00:47:11.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

