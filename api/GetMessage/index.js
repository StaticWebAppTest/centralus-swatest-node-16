module.exports = async function (context, req) {
  const date = "2025-01-16T18:15:26.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

