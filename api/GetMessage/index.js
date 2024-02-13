module.exports = async function (context, req) {
  const date = "2024-02-13T03:10:51.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

