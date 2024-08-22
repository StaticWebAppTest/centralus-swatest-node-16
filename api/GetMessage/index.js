module.exports = async function (context, req) {
  const date = "2024-08-22T21:12:01.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

