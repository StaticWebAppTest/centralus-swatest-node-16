module.exports = async function (context, req) {
  const date = "2022-11-07T06:15:12.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

