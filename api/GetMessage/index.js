module.exports = async function (context, req) {
  const date = "2024-07-16T07:10:55.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

