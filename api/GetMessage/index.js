module.exports = async function (context, req) {
  const date = "2023-02-13T12:18:58.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

