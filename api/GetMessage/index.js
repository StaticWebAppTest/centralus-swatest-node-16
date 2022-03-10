module.exports = async function (context, req) {
  const date = "2022-03-10T15:11:20.096Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

