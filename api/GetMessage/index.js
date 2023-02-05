module.exports = async function (context, req) {
  const date = "2023-02-05T12:16:12.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

