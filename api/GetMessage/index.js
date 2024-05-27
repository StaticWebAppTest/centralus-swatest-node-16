module.exports = async function (context, req) {
  const date = "2024-05-27T10:10:29.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

