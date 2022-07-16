module.exports = async function (context, req) {
  const date = "2022-07-16T10:10:35.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

