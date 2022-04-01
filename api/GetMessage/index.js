module.exports = async function (context, req) {
  const date = "2022-04-01T03:39:54.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

