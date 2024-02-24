module.exports = async function (context, req) {
  const date = "2024-02-24T02:12:26.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

