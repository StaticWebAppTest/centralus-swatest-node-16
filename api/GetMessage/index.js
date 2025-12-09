module.exports = async function (context, req) {
  const date = "2025-12-09T10:17:25.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

