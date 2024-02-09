module.exports = async function (context, req) {
  const date = "2024-02-09T08:11:08.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

