module.exports = async function (context, req) {
  const date = "2024-01-20T06:11:34.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

