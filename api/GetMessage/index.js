module.exports = async function (context, req) {
  const date = "2023-11-09T10:09:34.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

