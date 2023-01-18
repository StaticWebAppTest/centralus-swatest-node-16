module.exports = async function (context, req) {
  const date = "2023-01-18T19:07:48.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

