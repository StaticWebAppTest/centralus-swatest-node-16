module.exports = async function (context, req) {
  const date = "2023-01-16T02:12:55.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

