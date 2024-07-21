module.exports = async function (context, req) {
  const date = "2024-07-21T02:04:06.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

