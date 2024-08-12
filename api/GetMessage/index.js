module.exports = async function (context, req) {
  const date = "2024-08-12T07:10:42.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

