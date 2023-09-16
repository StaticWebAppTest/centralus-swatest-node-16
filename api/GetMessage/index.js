module.exports = async function (context, req) {
  const date = "2023-09-16T16:09:45.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

