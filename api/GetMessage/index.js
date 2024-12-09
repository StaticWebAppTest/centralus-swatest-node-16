module.exports = async function (context, req) {
  const date = "2024-12-09T09:14:29.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

