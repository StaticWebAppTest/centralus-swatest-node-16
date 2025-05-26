module.exports = async function (context, req) {
  const date = "2025-05-26T16:15:48.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

