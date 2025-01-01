module.exports = async function (context, req) {
  const date = "2025-01-01T06:17:18.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

