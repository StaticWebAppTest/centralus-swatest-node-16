module.exports = async function (context, req) {
  const date = "2024-02-24T03:10:55.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

