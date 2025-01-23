module.exports = async function (context, req) {
  const date = "2025-01-23T06:16:10.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

