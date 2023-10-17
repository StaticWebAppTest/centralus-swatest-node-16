module.exports = async function (context, req) {
  const date = "2023-10-17T16:11:30.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

