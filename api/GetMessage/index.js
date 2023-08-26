module.exports = async function (context, req) {
  const date = "2023-08-26T11:06:35.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

