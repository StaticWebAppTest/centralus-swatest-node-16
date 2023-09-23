module.exports = async function (context, req) {
  const date = "2023-09-23T15:07:26.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

