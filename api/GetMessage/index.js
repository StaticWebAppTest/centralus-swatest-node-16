module.exports = async function (context, req) {
  const date = "2024-02-16T07:08:34.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

