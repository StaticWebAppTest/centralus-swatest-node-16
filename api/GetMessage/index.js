module.exports = async function (context, req) {
  const date = "2023-11-12T14:12:11.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

