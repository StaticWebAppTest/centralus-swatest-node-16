module.exports = async function (context, req) {
  const date = "2025-05-27T12:27:41.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

