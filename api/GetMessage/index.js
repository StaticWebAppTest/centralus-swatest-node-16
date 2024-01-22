module.exports = async function (context, req) {
  const date = "2024-01-22T18:12:13.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

