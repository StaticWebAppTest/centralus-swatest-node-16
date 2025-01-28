module.exports = async function (context, req) {
  const date = "2025-01-28T12:21:58.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

