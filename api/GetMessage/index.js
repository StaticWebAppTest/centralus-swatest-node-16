module.exports = async function (context, req) {
  const date = "2022-06-11T16:12:45.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

