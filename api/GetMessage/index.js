module.exports = async function (context, req) {
  const date = "2025-12-12T23:13:56.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

