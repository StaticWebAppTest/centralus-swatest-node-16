module.exports = async function (context, req) {
  const date = "2023-06-25T19:07:53.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

