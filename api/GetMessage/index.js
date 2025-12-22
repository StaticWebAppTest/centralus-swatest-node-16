module.exports = async function (context, req) {
  const date = "2025-12-22T13:29:24.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

