module.exports = async function (context, req) {
  const date = "2024-12-22T14:09:58.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

