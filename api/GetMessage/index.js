module.exports = async function (context, req) {
  const date = "2023-04-03T08:12:16.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

