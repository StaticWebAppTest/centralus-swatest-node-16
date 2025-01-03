module.exports = async function (context, req) {
  const date = "2025-01-03T09:12:22.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

