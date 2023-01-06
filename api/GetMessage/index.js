module.exports = async function (context, req) {
  const date = "2023-01-06T22:08:46.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

