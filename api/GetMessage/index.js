module.exports = async function (context, req) {
  const date = "2023-06-02T03:10:05.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

