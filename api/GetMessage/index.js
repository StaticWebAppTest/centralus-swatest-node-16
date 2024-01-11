module.exports = async function (context, req) {
  const date = "2024-01-11T06:12:45.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

