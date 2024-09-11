module.exports = async function (context, req) {
  const date = "2024-09-11T10:11:41.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

