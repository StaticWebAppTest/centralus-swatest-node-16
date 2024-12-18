module.exports = async function (context, req) {
  const date = "2024-12-18T10:13:06.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

