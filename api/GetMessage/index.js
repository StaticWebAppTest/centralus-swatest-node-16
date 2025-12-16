module.exports = async function (context, req) {
  const date = "2025-12-16T12:30:59.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

