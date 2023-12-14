module.exports = async function (context, req) {
  const date = "2023-12-14T10:10:02.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

