module.exports = async function (context, req) {
  const date = "2022-09-22T06:52:53.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

