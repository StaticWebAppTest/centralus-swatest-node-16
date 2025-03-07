module.exports = async function (context, req) {
  const date = "2025-03-07T06:17:27.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

