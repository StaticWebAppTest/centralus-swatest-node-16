module.exports = async function (context, req) {
  const date = "2023-02-25T12:17:09.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

