module.exports = async function (context, req) {
  const date = "2025-02-26T17:11:00.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

