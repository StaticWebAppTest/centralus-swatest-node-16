module.exports = async function (context, req) {
  const date = "2022-04-24T06:13:21.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

