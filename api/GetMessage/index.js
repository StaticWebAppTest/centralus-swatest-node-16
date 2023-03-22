module.exports = async function (context, req) {
  const date = "2023-03-22T02:02:56.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

