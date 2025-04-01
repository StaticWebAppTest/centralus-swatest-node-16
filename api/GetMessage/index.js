module.exports = async function (context, req) {
  const date = "2025-04-01T05:13:20.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

