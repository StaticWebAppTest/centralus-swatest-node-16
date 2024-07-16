module.exports = async function (context, req) {
  const date = "2024-07-16T13:09:05.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

