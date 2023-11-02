module.exports = async function (context, req) {
  const date = "2023-11-02T12:16:17.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

