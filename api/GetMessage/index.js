module.exports = async function (context, req) {
  const date = "2024-03-05T10:10:16.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

