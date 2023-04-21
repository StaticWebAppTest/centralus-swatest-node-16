module.exports = async function (context, req) {
  const date = "2023-04-21T16:11:16.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

