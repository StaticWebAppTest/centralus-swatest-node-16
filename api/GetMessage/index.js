module.exports = async function (context, req) {
  const date = "2024-09-26T17:12:14.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

