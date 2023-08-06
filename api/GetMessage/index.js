module.exports = async function (context, req) {
  const date = "2023-08-06T05:07:44.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

