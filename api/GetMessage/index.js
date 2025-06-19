module.exports = async function (context, req) {
  const date = "2025-06-19T21:12:28.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

