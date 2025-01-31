module.exports = async function (context, req) {
  const date = "2025-01-31T18:15:17.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

