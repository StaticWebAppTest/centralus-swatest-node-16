module.exports = async function (context, req) {
  const date = "2024-02-26T21:09:28.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

