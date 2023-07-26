module.exports = async function (context, req) {
  const date = "2023-07-26T23:08:15.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

