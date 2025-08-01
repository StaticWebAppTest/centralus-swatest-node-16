module.exports = async function (context, req) {
  const date = "2025-08-01T01:21:25.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

