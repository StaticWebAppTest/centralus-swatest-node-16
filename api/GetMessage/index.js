module.exports = async function (context, req) {
  const date = "2024-10-22T23:12:14.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

