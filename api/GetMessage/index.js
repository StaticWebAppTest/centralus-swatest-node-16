module.exports = async function (context, req) {
  const date = "2024-09-08T10:11:31.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

