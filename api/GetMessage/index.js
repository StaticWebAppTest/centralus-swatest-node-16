module.exports = async function (context, req) {
  const date = "2024-03-18T12:16:14.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

