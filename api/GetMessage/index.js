module.exports = async function (context, req) {
  const date = "2024-11-24T19:09:29.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

