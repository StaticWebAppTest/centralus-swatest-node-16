module.exports = async function (context, req) {
  const date = "2022-09-03T07:10:06.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

