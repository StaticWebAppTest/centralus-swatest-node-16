module.exports = async function (context, req) {
  const date = "2023-09-05T20:09:01.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

