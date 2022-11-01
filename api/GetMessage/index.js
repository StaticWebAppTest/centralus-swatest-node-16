module.exports = async function (context, req) {
  const date = "2022-11-01T13:42:17.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

