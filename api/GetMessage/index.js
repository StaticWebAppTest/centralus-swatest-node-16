module.exports = async function (context, req) {
  const date = "2025-01-27T15:11:16.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

