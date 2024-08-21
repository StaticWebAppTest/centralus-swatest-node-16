module.exports = async function (context, req) {
  const date = "2024-08-21T06:14:52.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

