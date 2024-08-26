module.exports = async function (context, req) {
  const date = "2024-08-26T20:12:31.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

