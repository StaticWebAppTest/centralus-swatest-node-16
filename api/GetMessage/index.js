module.exports = async function (context, req) {
  const date = "2023-01-22T14:07:39.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

