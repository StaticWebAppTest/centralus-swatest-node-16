module.exports = async function (context, req) {
  const date = "2024-02-05T21:08:01.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

