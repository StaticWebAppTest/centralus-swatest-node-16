module.exports = async function (context, req) {
  const date = "2023-09-26T03:09:10.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

