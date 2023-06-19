module.exports = async function (context, req) {
  const date = "2023-06-19T02:12:15.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

