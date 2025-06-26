module.exports = async function (context, req) {
  const date = "2025-06-26T15:14:32.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

