module.exports = async function (context, req) {
  const date = "2023-08-16T16:10:32.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

