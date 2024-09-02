module.exports = async function (context, req) {
  const date = "2024-09-02T12:21:51.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

