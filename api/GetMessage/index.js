module.exports = async function (context, req) {
  const date = "2023-06-29T15:09:47.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

