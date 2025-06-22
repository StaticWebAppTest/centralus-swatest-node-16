module.exports = async function (context, req) {
  const date = "2025-06-22T18:17:25.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

