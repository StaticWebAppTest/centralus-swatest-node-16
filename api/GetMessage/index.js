module.exports = async function (context, req) {
  const date = "2024-02-04T00:44:49.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

