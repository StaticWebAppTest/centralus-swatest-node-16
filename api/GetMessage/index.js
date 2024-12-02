module.exports = async function (context, req) {
  const date = "2024-12-02T03:37:36.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

