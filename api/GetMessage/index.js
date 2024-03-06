module.exports = async function (context, req) {
  const date = "2024-03-06T19:06:42.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

