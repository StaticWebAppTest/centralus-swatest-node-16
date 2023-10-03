module.exports = async function (context, req) {
  const date = "2023-10-03T10:09:48.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

