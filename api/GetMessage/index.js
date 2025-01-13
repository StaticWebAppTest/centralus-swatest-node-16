module.exports = async function (context, req) {
  const date = "2025-01-13T13:18:58.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

