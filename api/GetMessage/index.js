module.exports = async function (context, req) {
  const date = "2025-06-26T17:12:26.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

