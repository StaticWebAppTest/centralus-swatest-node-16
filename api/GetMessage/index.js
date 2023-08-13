module.exports = async function (context, req) {
  const date = "2023-08-13T20:08:13.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

