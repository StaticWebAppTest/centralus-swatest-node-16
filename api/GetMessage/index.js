module.exports = async function (context, req) {
  const date = "2023-02-14T10:11:21.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

