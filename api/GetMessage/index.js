module.exports = async function (context, req) {
  const date = "2025-12-16T13:33:49.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

