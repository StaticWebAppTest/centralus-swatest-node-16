module.exports = async function (context, req) {
  const date = "2023-09-07T02:14:38.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

