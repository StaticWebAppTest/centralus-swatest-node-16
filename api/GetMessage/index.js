module.exports = async function (context, req) {
  const date = "2023-04-22T16:10:51.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

