module.exports = async function (context, req) {
  const date = "2025-03-24T08:17:32.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

