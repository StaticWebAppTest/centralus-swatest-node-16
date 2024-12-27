module.exports = async function (context, req) {
  const date = "2024-12-27T03:16:06.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

