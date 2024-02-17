module.exports = async function (context, req) {
  const date = "2024-02-17T03:09:59.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

