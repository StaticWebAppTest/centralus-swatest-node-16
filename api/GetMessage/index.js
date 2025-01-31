module.exports = async function (context, req) {
  const date = "2025-01-31T15:11:27.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

