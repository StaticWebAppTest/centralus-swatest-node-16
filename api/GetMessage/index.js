module.exports = async function (context, req) {
  const date = "2025-12-22T15:15:38.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

