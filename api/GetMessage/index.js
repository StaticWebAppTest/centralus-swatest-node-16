module.exports = async function (context, req) {
  const date = "2025-12-01T13:30:57.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

