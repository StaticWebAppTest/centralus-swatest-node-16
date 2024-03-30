module.exports = async function (context, req) {
  const date = "2024-03-30T04:10:22.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

