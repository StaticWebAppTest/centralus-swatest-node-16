module.exports = async function (context, req) {
  const date = "2024-07-24T09:10:58.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

