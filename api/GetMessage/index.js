module.exports = async function (context, req) {
  const date = "2024-01-01T18:11:41.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

