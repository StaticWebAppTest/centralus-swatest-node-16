module.exports = async function (context, req) {
  const date = "2024-01-22T14:09:35.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

