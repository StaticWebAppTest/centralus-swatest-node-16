module.exports = async function (context, req) {
  const date = "2024-02-17T21:07:13.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

