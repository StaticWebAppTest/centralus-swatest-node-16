module.exports = async function (context, req) {
  const date = "2024-05-02T12:17:39.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

