module.exports = async function (context, req) {
  const date = "2023-06-05T11:07:34.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

