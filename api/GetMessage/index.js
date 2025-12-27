module.exports = async function (context, req) {
  const date = "2025-12-27T18:19:49.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

