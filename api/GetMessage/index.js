module.exports = async function (context, req) {
  const date = "2023-11-01T18:11:20.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

