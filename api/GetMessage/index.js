module.exports = async function (context, req) {
  const date = "2024-10-05T10:10:54.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

