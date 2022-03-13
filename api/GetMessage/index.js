module.exports = async function (context, req) {
  const date = "2022-03-13T15:10:16.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

