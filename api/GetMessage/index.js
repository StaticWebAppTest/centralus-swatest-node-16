module.exports = async function (context, req) {
  const date = "2023-02-13T04:12:29.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

