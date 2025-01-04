module.exports = async function (context, req) {
  const date = "2025-01-04T15:10:38.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

