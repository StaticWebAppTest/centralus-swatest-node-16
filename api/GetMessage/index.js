module.exports = async function (context, req) {
  const date = "2024-01-01T09:09:55.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

