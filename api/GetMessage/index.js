module.exports = async function (context, req) {
  const date = "2024-07-20T10:10:29.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

