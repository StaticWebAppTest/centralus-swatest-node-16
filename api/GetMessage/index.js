module.exports = async function (context, req) {
  const date = "2024-06-24T03:11:54.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

