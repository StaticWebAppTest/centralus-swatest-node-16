module.exports = async function (context, req) {
  const date = "2023-06-18T05:08:47.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

