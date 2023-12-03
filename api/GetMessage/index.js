module.exports = async function (context, req) {
  const date = "2023-12-03T02:23:18.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

