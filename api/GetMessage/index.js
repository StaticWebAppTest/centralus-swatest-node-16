module.exports = async function (context, req) {
  const date = "2024-06-27T06:14:43.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

