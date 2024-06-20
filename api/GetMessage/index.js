module.exports = async function (context, req) {
  const date = "2024-06-20T10:10:57.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

