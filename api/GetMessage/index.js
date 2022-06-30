module.exports = async function (context, req) {
  const date = "2022-06-30T16:16:03.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

