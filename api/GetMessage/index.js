module.exports = async function (context, req) {
  const date = "2024-09-12T12:21:04.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

