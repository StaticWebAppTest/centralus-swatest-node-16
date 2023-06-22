module.exports = async function (context, req) {
  const date = "2023-06-22T20:10:42.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

