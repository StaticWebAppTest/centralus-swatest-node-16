module.exports = async function (context, req) {
  const date = "2023-01-21T02:10:16.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

