module.exports = async function (context, req) {
  const date = "2023-11-26T00:46:21.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

