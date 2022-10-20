module.exports = async function (context, req) {
  const date = "2022-10-20T05:04:08.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

